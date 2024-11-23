import type React from "react";
import type { SpeakerBracket } from "../types";

interface ScoreRangeProps {
	bracket: SpeakerBracket;
	exactScore: number | null;
}

const ScoreRange: React.FC<ScoreRangeProps> = ({ bracket, exactScore }) => {
	const scores = Array.from(
		{ length: bracket.maxScore - bracket.minScore + 1 },
		(_, i) => bracket.minScore + i,
	);

	return (
		<div className="score-range">
			{scores.map((score) => (
				<span
					key={score}
					className={
						score === exactScore ? "selected-score" : "neighbouring-score"
					}
				>
					{score}
				</span>
			))}
		</div>
	);
};

export default ScoreRange;
