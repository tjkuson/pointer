import type React from "react";
import type { PositionOption, ScoreOption } from "../data/bracketOptions";
import {
	bottomBracketOptions,
	defaultBracketOptions,
	tenthBracketOptions,
	topBracketOptions,
} from "../data/bracketOptions";
import type { SpeakerBracket } from "../types";

interface DisplayOption {
	label: string;
	onClick: () => void;
	key: string | number;
}

interface ScoreSelectionProps {
	selectedBracketIndex: number;
	currentScale: SpeakerBracket[];
	handleSelectScore: (position: string) => void;
	handleSelectExactScore: (score: number) => void;
}

const ScoreSelection: React.FC<ScoreSelectionProps> = ({
	selectedBracketIndex,
	currentScale,
	handleSelectScore,
	handleSelectExactScore,
}) => {
	const bracketOptionsMap: { [index: number]: ScoreOption[] } = {
		0: topBracketOptions,
		5: tenthBracketOptions,
		[currentScale.length - 1]: bottomBracketOptions,
	};

	const getOptions = (): DisplayOption[] => {
		const specialOptions = bracketOptionsMap[selectedBracketIndex];
		if (specialOptions) {
			return specialOptions.map((option: ScoreOption) => ({
				label: option.label,
				onClick: () => handleSelectExactScore(option.score),
				key: option.score,
			}));
		}
		return defaultBracketOptions.map((option: PositionOption) => ({
			label: option.label,
			onClick: () => handleSelectScore(option.position),
			key: option.position,
		}));
	};

	const options = getOptions();

	return (
		<div>
			<p>Position within this bracket:</p>
			<div className="button-container">
				{options.map((option) => (
					<button type="submit" key={option.key} onClick={option.onClick}>
						{option.label}
					</button>
				))}
			</div>
		</div>
	);
};

export default ScoreSelection;
