import { useState } from "react";
import "./App.css";
import BracketDescription from "./components/BracketDescription";
import Footer from "./components/Footer";
import ScaleSelection from "./components/ScaleSelection";
import ScoreSelection from "./components/ScoreSelection";
import { scales } from "./data/scales";
import type { Bracket, JudgeBracket, ScaleType, SpeakerBracket } from "./types";
import { isSpeakerBracket } from "./utils";

function App() {
	const [selectedScale, setSelectedScale] = useState<ScaleType>("speaker");
	const [low, setLow] = useState(0);
	const [high, setHigh] = useState(scales[selectedScale].length - 1);
	const [mid, setMid] = useState(
		Math.floor((0 + scales[selectedScale].length - 1) / 2),
	);
	const [phase, setPhase] = useState<"search" | "select" | "done" | "between">(
		"search",
	);
	const [selectedBracketIndex, setSelectedBracketIndex] = useState<
		number | null
	>(null);
	const [exactScore, setExactScore] = useState<number | null>(null);
	const [showScale, setShowScale] = useState(false);
	const [betweenBracketIndices, setBetweenBracketIndices] = useState<
		[number, number] | null
	>(null);

	const currentScale = scales[selectedScale] as Bracket[];

	const handleScaleChange = (newScale: ScaleType) => {
		setSelectedScale(newScale);
		setLow(0);
		setHigh(scales[newScale].length - 1);
		setMid(Math.floor((0 + scales[newScale].length - 1) / 2));
		setPhase("search");
		setSelectedBracketIndex(null);
		setExactScore(null);
		setBetweenBracketIndices(null);
		setShowScale(false);
	};

	const handleBetter = () => {
		const newHigh = mid - 1;
		if (newHigh < low) {
			// No more higher brackets.
			if (mid === 0) {
				// At the top bracket.
				setSelectedBracketIndex(mid);
				const bracket = currentScale[mid];
				if (!isSpeakerBracket(bracket)) {
					setExactScore((bracket as JudgeBracket).score);
					setPhase("done");
				} else {
					setPhase("select");
				}
			} else {
				// Between mid-1 and mid.
				setBetweenBracketIndices([mid - 1, mid]);
				setPhase("between");
			}
		} else {
			setHigh(newHigh);
			const newMid = Math.floor((low + newHigh) / 2);
			setMid(newMid);
		}
	};

	const handleWorse = () => {
		const newLow = mid + 1;
		if (newLow > high) {
			// No more lower brackets.
			if (mid === currentScale.length - 1) {
				// At the lowest bracket.
				setSelectedBracketIndex(mid);
				const bracket = currentScale[mid];
				if (!isSpeakerBracket(bracket)) {
					setExactScore((bracket as JudgeBracket).score);
					setPhase("done");
				} else {
					setPhase("select");
				}
			} else {
				// Between mid and mid+1.
				setBetweenBracketIndices([mid, mid + 1]);
				setPhase("between");
			}
		} else {
			setLow(newLow);
			const newMid = Math.floor((newLow + high) / 2);
			setMid(newMid);
		}
	};

	const handleMatched = () => {
		setSelectedBracketIndex(mid);
		const bracket = currentScale[mid];
		if (!isSpeakerBracket(bracket)) {
			setExactScore((bracket as JudgeBracket).score);
			setPhase("done");
		} else {
			setPhase("select");
		}
	};

	const handleSelectScore = (position: string) => {
		if (selectedBracketIndex !== null) {
			const bracket = currentScale[selectedBracketIndex];
			if (isSpeakerBracket(bracket)) {
				let score: number;

				if (position === "lower") {
					score = bracket.minScore;
				} else if (position === "higher") {
					score = bracket.maxScore;
				} else {
					score = Math.floor((bracket.minScore + bracket.maxScore) / 2);
				}

				setExactScore(score);
				setPhase("done");
			}
		}
	};

	const handleSelectExactScore = (score: number) => {
		setExactScore(score);
		setPhase("done");
	};

	const selectBracket = (index: number) => {
		setSelectedBracketIndex(index);
		const bracket = currentScale[index];
		if (!isSpeakerBracket(bracket)) {
			setExactScore((bracket as JudgeBracket).score);
			setPhase("done");
		} else {
			setPhase("select");
		}
	};

	const reset = () => {
		setLow(0);
		setHigh(currentScale.length - 1);
		setMid(Math.floor((0 + currentScale.length - 1) / 2));
		setPhase("search");
		setSelectedBracketIndex(null);
		setExactScore(null);
		setBetweenBracketIndices(null);
		setShowScale(false);
	};

	return (
		<div className="App">
			<h1>Pointer</h1>
			<p>
				Allocate debate points quickly and thoroughly using a{" "}
				<a
					href="https://en.wikipedia.org/wiki/Binary_search"
					rel="noopener noreferrer"
				>
					binary search
				</a>
				!
			</p>

			<div className="content-container">
				<ScaleSelection
					selectedScale={selectedScale}
					onChange={handleScaleChange}
				/>

				{phase === "search" && (
					<div>
						<BracketDescription description={currentScale[mid].description} />
						<p>
							Does the {selectedScale === "speaker" ? "speech" : "adjudication"}{" "}
							match this description, is it worse, or is it better?
						</p>
						<div className="button-container">
							<button type="submit" onClick={handleWorse}>
								Worse
							</button>
							<button type="submit" onClick={handleMatched}>
								MATCH
							</button>
							<button type="submit" onClick={handleBetter}>
								Better
							</button>
						</div>
						<p>
							Focus on the current description only. If no exact match is
							available, you’ll choose between the closest available brackets.
						</p>
					</div>
				)}

				{phase === "between" && betweenBracketIndices !== null && (
					<div>
						<p>Your selection is between two brackets:</p>
						<h2>Bracket 1:</h2>
						<BracketDescription
							description={currentScale[betweenBracketIndices[0]].description}
						/>
						<h2>Bracket 2:</h2>
						<BracketDescription
							description={currentScale[betweenBracketIndices[1]].description}
						/>
						<p>Which bracket matches better?</p>
						<div className="button-container">
							<button
								type="submit"
								onClick={() => selectBracket(betweenBracketIndices[0])}
							>
								Bracket 1
							</button>
							<button
								type="submit"
								onClick={() => selectBracket(betweenBracketIndices[1])}
							>
								Bracket 2
							</button>
						</div>
					</div>
				)}

				{phase === "select" && selectedBracketIndex !== null && (
					<div>
						<h2>Selected Bracket:</h2>
						<BracketDescription
							description={currentScale[selectedBracketIndex].description}
						/>
						{isSpeakerBracket(currentScale[selectedBracketIndex]) && (
							<ScoreSelection
								selectedBracketIndex={selectedBracketIndex}
								currentScale={currentScale as SpeakerBracket[]}
								handleSelectScore={handleSelectScore}
								handleSelectExactScore={handleSelectExactScore}
							/>
						)}
					</div>
				)}

				{phase === "done" &&
					selectedBracketIndex !== null &&
					exactScore !== null && (
						<div>
							<p>
								You have selected a score of <strong>{exactScore}</strong>.
							</p>
							<BracketDescription
								description={currentScale[selectedBracketIndex].description}
							/>
							<div className="button-container">
								<button type="reset" onClick={reset}>
									Start Over
								</button>
							</div>
						</div>
					)}

				<div>
					<div className="button-container">
						<button type="button" onClick={() => setShowScale(!showScale)}>
							{showScale ? "Hide Scale" : "Just show me the scale"}
						</button>
					</div>
					{showScale && (
						<div className="scale-container">
							{currentScale
								.slice()
								.reverse()
								.map((bracket) => (
									<div
										key={
											isSpeakerBracket(bracket)
												? `${bracket.minScore}-${bracket.maxScore}`
												: `judge-${bracket.score}`
										}
									>
										<h3>
											{isSpeakerBracket(bracket)
												? `${bracket.minScore} – ${bracket.maxScore}`
												: bracket.score}
										</h3>
										<BracketDescription description={bracket.description} />
									</div>
								))}
						</div>
					)}
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default App;
