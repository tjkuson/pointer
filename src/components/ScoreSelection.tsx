import type React from "react";
import {
	bottomBracketOptions,
	topBracketOptions,
} from "../data/bracketOptions";
import type { SpeakerBracket } from "../types";

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
	return (
		<div>
			<p>Position within this bracket:</p>
			<div className="button-container">
				{selectedBracketIndex === 0 ? (
					<div>
						{topBracketOptions.map((option) => (
							<button
								type="submit"
								key={option.score}
								onClick={() => handleSelectExactScore(option.score)}
							>
								{option.label}
							</button>
						))}
					</div>
				) : selectedBracketIndex === currentScale.length - 1 ? (
					<div>
						{bottomBracketOptions.map((option) => (
							<button
								type="submit"
								key={option.score}
								onClick={() => handleSelectExactScore(option.score)}
							>
								{option.label}
							</button>
						))}
					</div>
				) : (
					<div>
						<button type="submit" onClick={() => handleSelectScore("lower")}>
							Lower-end
						</button>
						<button type="submit" onClick={() => handleSelectScore("middle")}>
							Middle
						</button>
						<button type="submit" onClick={() => handleSelectScore("higher")}>
							Higher-end
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default ScoreSelection;
