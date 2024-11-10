import { useMemo, useState } from "react";
import { scales } from "../data/scales";
import type {
	Bracket,
	JudgeBracket,
	ScaleType,
	SpeakerBracket,
} from "../types";
import { isSpeakerBracket } from "../utils";

export function useBinarySearch(initialScale: ScaleType = "speaker") {
	const [selectedScale, setSelectedScale] = useState<ScaleType>(initialScale);
	const [low, setLow] = useState(0);
	const [high, setHigh] = useState(scales[initialScale].length - 1);
	const mid = useMemo(() => Math.floor((low + high) / 2), [low, high]);
	const [phase, setPhase] = useState<"search" | "select" | "done" | "between">(
		"search",
	);
	const [selectedBracketIndex, setSelectedBracketIndex] = useState<
		number | null
	>(null);
	const [exactScore, setExactScore] = useState<number | null>(null);
	const [betweenBracketIndices, setBetweenBracketIndices] = useState<
		[number, number] | null
	>(null);
	const [showScale, setShowScale] = useState(false);

	const currentScale = scales[selectedScale] as Bracket[];

	const handleScaleChange = (newScale: ScaleType) => {
		setSelectedScale(newScale);
		setLow(0);
		setHigh(scales[newScale].length - 1);
		setPhase("search");
		setSelectedBracketIndex(null);
		setExactScore(null);
		setBetweenBracketIndices(null);
		setShowScale(false);
	};

	const handleBetter = () => {
		const newHigh = mid - 1;
		if (newHigh >= low) {
			setHigh(newHigh);
		} else if (mid === 0) {
			// At the top bracket
			setSelectedBracketIndex(mid);
			const bracket = currentScale[mid];
			if (!isSpeakerBracket(bracket)) {
				setExactScore((bracket as JudgeBracket).score);
				setPhase("done");
			} else {
				setPhase("select");
			}
		} else {
			// Between mid - 1 and mid
			setBetweenBracketIndices([mid - 1, mid]);
			setPhase("between");
		}
	};

	const handleWorse = () => {
		const newLow = mid + 1;
		if (newLow <= high) {
			setLow(newLow);
		} else if (mid === currentScale.length - 1) {
			// At the lowest bracket
			setSelectedBracketIndex(mid);
			const bracket = currentScale[mid];
			if (!isSpeakerBracket(bracket)) {
				setExactScore((bracket as JudgeBracket).score);
				setPhase("done");
			} else {
				setPhase("select");
			}
		} else {
			// Between mid and mid + 1
			setBetweenBracketIndices([mid, mid + 1]);
			setPhase("between");
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
		if (selectedBracketIndex == null) return;

		const bracket = currentScale[selectedBracketIndex] as SpeakerBracket;
		if (!isSpeakerBracket(bracket)) return;

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
		setPhase("search");
		setSelectedBracketIndex(null);
		setExactScore(null);
		setBetweenBracketIndices(null);
		setShowScale(false);
	};

	const toggleShowScale = () => {
		setShowScale((prev) => !prev);
	};

	return {
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
	};
}
