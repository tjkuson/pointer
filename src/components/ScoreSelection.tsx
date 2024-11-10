import type React from "react";
import { useScoreOptions } from "../hooks/useScoreOptions";

interface ScoreSelectionProps {
	selectedBracketIndex: number;
	scaleLength: number;
	handleSelectScore: (position: string) => void;
	handleSelectExactScore: (score: number) => void;
}

const ScoreSelection: React.FC<ScoreSelectionProps> = ({
	selectedBracketIndex,
	scaleLength,
	handleSelectScore,
	handleSelectExactScore,
}) => {
	const options = useScoreOptions({
		selectedBracketIndex,
		scaleLength,
		handleSelectScore,
		handleSelectExactScore,
	});

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
