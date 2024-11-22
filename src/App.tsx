import "./App.css";
import BracketDescription from "./components/BracketDescription";
import Footer from "./components/Footer";
import ScaleSelection from "./components/ScaleSelection";
import Score from "./components/Score";
import ScoreRange from "./components/ScoreRange";
import ScoreSelection from "./components/ScoreSelection";
import { useBinarySearch } from "./hooks/useBinarySearch";
import { isSpeakerBracket } from "./utils";

function App() {
	const {
		selectedScale,
		handleScaleChange,
		mid,
		phase,
		selectedBracketIndex,
		exactScore,
		betweenBracketIndices,
		showScale,
		currentScale,
		handleBetter,
		handleWorse,
		handleMatched,
		handleSelectScore,
		handleSelectExactScore,
		selectBracket,
		reset,
		toggleShowScale,
	} = useBinarySearch();

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
						<BracketDescription description={currentScale[mid].description} />
						{isSpeakerBracket(currentScale[selectedBracketIndex]) && (
							<ScoreSelection
								selectedBracketIndex={selectedBracketIndex}
								scaleLength={currentScale.length}
								handleSelectScore={handleSelectScore}
								handleSelectExactScore={handleSelectExactScore}
							/>
						)}
					</div>
				)}

				{phase === "done" && selectedBracketIndex !== null && (
					<div>
						<p>You have selected a score of...</p>
						{isSpeakerBracket(currentScale[selectedBracketIndex]) ? (
							<ScoreRange
								bracket={currentScale[selectedBracketIndex]}
								exactScore={exactScore}
							/>
						) : (
							<Score bracket={currentScale[selectedBracketIndex]} />
						)}
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
						<button type="button" onClick={toggleShowScale}>
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
