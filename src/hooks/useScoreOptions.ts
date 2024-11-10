import {
	type ScoreOption,
	bottomBracketOptions,
	defaultBracketOptions,
	tenthBracketOptions,
	topBracketOptions,
} from "../data/bracketOptions";

interface UseScoreOptionsParams {
	selectedBracketIndex: number;
	scaleLength: number;
	handleSelectScore: (position: string) => void;
	handleSelectExactScore: (score: number) => void;
}

interface DisplayOption {
	label: string;
	onClick: () => void;
	key: string | number;
}

export function useScoreOptions({
	selectedBracketIndex,
	scaleLength,
	handleSelectScore,
	handleSelectExactScore,
}: UseScoreOptionsParams): DisplayOption[] {
	const bracketOptionsMap: { [index: number]: ScoreOption[] } = {
		0: topBracketOptions,
		5: tenthBracketOptions,
		[scaleLength - 1]: bottomBracketOptions,
	};

	const specialOptions = bracketOptionsMap[selectedBracketIndex];

	if (specialOptions) {
		return specialOptions.map((option) => ({
			label: option.label,
			onClick: () => handleSelectExactScore(option.score),
			key: option.score,
		}));
	}
	return defaultBracketOptions.map((option) => ({
		label: option.label,
		onClick: () => handleSelectScore(option.position),
		key: option.position,
	}));
}
