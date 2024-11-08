import type { SpeakerBracket } from "../types";

export const speakerScale: SpeakerBracket[] = [
	{
		minScore: 95,
		maxScore: 100,
		description:
			"Plausibly one of the best debating speeches ever given;\nIt is incredibly difficult to think up satisfactory responses to any of the arguments made;\nFlawless and compelling arguments.",
	},
	{
		minScore: 92,
		maxScore: 94,
		description:
			"An incredible speech, undoubtedly one of the best at the competition;\nSuccessfully engaging with the core issues of the debate, arguments exceptionally well made, and it would take a brilliant set of responses to defeat the arguments;\nThere are no flaws of any significance.",
	},
	{
		minScore: 89,
		maxScore: 91,
		description:
			"Brilliant arguments successfully engage with the main issues in the round;\nArguments are very well-explained and illustrated, and demand extremely sophisticated responses in order to be defeated;\nOnly very minor problems, if any, but they do not affect the strength of the claims made.",
	},
	{
		minScore: 86,
		maxScore: 88,
		description:
			"Arguments engage with core issues of the debate, and are highly compelling;\nNo logical gaps, and sophisticated responses required to defeat the arguments;\nOnly minor flaws in arguments.",
	},
	{
		minScore: 83,
		maxScore: 85,
		description:
			"Arguments address the core issues of the debate;\nArguments have strong explanations, which demand a strong response from other speakers in order to defeat the arguments;\nMay occasionally fail to fully respond to very well-made arguments, but flaws in the speech are limited.",
	},
	{
		minScore: 79,
		maxScore: 82,
		description:
			"Arguments are relevant, and address the core issues in the debate;\nArguments well made without obvious logical gaps, and are all well explained;\nMay be vulnerable to good responses.",
	},
	{
		minScore: 76,
		maxScore: 78,
		description:
			"Arguments are almost exclusively relevant, and address most of the core issues;\nOccasionally, but not often, arguments may slip into: (i) deficits in explanation, (ii) simplistic argumentation vulnerable to competent responses, or (iii) peripheral or irrelevant arguments;\nClear to follow, and thus credit.",
	},
	{
		minScore: 73,
		maxScore: 75,
		description:
			"Arguments are almost exclusively relevant, although may fail to address one or more core issues sufficiently;\nArguments are logical, but tend to be simplistic and vulnerable to competent responses;\nClear enough to follow, and thus credit.",
	},
	{
		minScore: 70,
		maxScore: 72,
		description:
			"Arguments are frequently relevant;\nArguments have some explanation, but there are regular significant logical gaps;\nSometimes difficult to follow, and thus credit fully.",
	},
	{
		minScore: 67,
		maxScore: 69,
		description:
			"Arguments are generally relevant;\nArguments almost all have explanations, but almost all have significant logical gaps;\nSometimes clear, but generally difficult to follow and thus credit the speaker for their material.",
	},
	{
		minScore: 64,
		maxScore: 66,
		description:
			"Some arguments made that are relevant;\nArguments generally have explanations, but have significant logical gaps;\nOften unclear, which makes it hard to give the speech much credit.",
	},
	{
		minScore: 61,
		maxScore: 63,
		description:
			"Some relevant claims, and most will be formulated as arguments;\nArguments have occasional explanations, but these have significant logical gaps;\nFrequently unclear and confusing, which makes it hard to give the speech much credit.",
	},
	{
		minScore: 58,
		maxScore: 60,
		description:
			"Claims are occasionally relevant;\nClaims are not formulated as arguments, but there may be some suggestion towards an explanation;\nHard to follow, which makes it hard to give the speech much credit.",
	},
	{
		minScore: 55,
		maxScore: 57,
		description:
			"One or two marginally relevant claims;\nClaims are not formulated as arguments, and are instead just comments;\nHard to follow almost in its entirety, which makes it hard to give the speech much credit.",
	},
	{
		minScore: 50,
		maxScore: 54,
		description:
			"Content is not relevant;\nContent does not go beyond claims, and is both confusing and confused;\nVery hard to follow in its entirety, which makes it hard to give the speech any credit.",
	},
];
