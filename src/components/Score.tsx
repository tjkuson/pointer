import type React from "react";
import type { JudgeBracket } from "../types";

interface ScoreProps {
	bracket: JudgeBracket;
}

const Score: React.FC<ScoreProps> = ({ bracket }) => {
	const score = bracket.score;
	return (
		<div className="score-range">
			<span key={score} className="selected-score">
				{score}
			</span>
		</div>
	);
};

export default Score;
