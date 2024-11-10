export interface ScoreOption {
	label: string;
	score: number;
}

export interface PositionOption {
	label: string;
	position: string;
}

export const topBracketOptions: ScoreOption[] = [
	{ label: "Lower-end", score: 95 },
	{ label: "Lower-middle", score: 96 },
	{ label: "Middle", score: 97 },
	{ label: "Upper-middle", score: 98 },
	{ label: "Upper-end", score: 99 },
	{ label: "Absolute max", score: 100 },
];

export const bottomBracketOptions: ScoreOption[] = [
	{ label: "Absolute min", score: 50 },
	{ label: "Lower-end", score: 51 },
	{ label: "Lower-middle", score: 52 },
	{ label: "Middle", score: 53 },
	{ label: "Upper-middle", score: 54 },
	{ label: "Upper-end", score: 55 },
];

export const tenthBracketOptions: ScoreOption[] = [
	{ label: "Lower-end", score: 79 },
	{ label: "Lower-middle", score: 80 },
	{ label: "Upper-middle", score: 81 },
	{ label: "Upper-end", score: 82 },
];

export const defaultBracketOptions: PositionOption[] = [
	{ label: "Lower-end", position: "lower" },
	{ label: "Middle", position: "middle" },
	{ label: "Higher-end", position: "higher" },
];
