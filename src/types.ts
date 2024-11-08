export interface SpeakerBracket {
	minScore: number;
	maxScore: number;
	description: string;
}

export interface JudgeBracket {
	score: number;
	description: string;
}

export type Bracket = SpeakerBracket | JudgeBracket;

export type ScaleType = "speaker" | "chair" | "panellist";

export interface ScaleData {
	speaker: SpeakerBracket[];
	chair: JudgeBracket[];
	panellist: JudgeBracket[];
}
