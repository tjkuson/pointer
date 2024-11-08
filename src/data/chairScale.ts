import type { JudgeBracket } from "../types";

export const chairScale: JudgeBracket[] = [
	{
		score: 10,
		description:
			"Accuracy: Extremely accurate call, reflected through precise appreciation and very meticulous assessment of ‘close’ comparisons between teams; comprehensive recognition of all necessary inter-team comparisons.\nReasoning/Justification: Extremely well-justified justification, evidenced by flawlessly or near-flawlessly outlined explanations that are in-depth, insightful, and nuanced; explicit identification and strong justification for any weighing metrics or assumptions employed in judging.\nDiscussion: Offers highly astute and insightful comments on the debate; highly efficient, and demonstrates profound acumen in managing the panel discussion and (where appropriate) offering constructive feedback to teams.",
	},
	{
		score: 9,
		description:
			"Accuracy: Very accurate call, reflected through appreciation and correct assessment of ‘close’ comparisons between teams; comprehensive recognition of most necessary inter-team comparisons.\nReasoning/Justification: Very well-justified justification, evidenced by well-outlined explanations that are in-depth, insightful, and nuanced; good attempts made to justify weighing metrics in judging.\nDiscussion: Offers very insightful comments on the debate; consistently efficient, and demonstrates effectiveness and judgement in managing the panel discussion.",
	},
	{
		score: 8,
		description:
			"Accuracy: Accurate call, reflected through largely correct judgement regarding ‘close’ comparisons between teams; detailed recognition of most necessary inter-team comparisons.\nReasoning/Justification: Comprehensively justified justification, evidenced by well-outlined explanations that are in-depth and nuanced; very occasional slippage into minor assumptions or personal biases in judging, or minor lack of clarity in one or more inter-team comparisons; metrics for judging are identified but not explicitly justified.\nDiscussion: Offers mostly insightful comments on the debate; largely efficient, and demonstrates effectiveness in managing the panel discussion.",
	},
	{
		score: 7,
		description:
			"Accuracy: Accurate call, reflected through generally correct rankings but potentially wrong regarding ‘close’ comparisons between teams; careful acknowledgment of most necessary inter-team comparisons in consideration.\nReasoning/Justification: Generally well-justified justification, evidenced by well-outlined explanations; occasional slippage into minor personal biases and assumptions, or minor lack of clarity in some inter-team comparisons.\nDiscussion: Offers generally relevant comments on the debate; efficient with occasional slip-ups and flaws or imbalance in managing discussion; demonstrates an appropriate level of judgement (at times limited) in oral adjudication.",
	},
	{
		score: 6,
		description:
			"Accuracy: Mostly accurate call, although may fail to get ‘close’ comparisons between teams correct.\nReasoning/Justification: Good attempt at justifying decision; explanations demonstrating some appreciation of key clashes and how they are resolved; occasional slippage into minor or insignificant personal biases and assumptions; lack of clarity in some inter-team comparisons.\nDiscussion: Offers some helpful or useful comments on the debate; somewhat inefficient and barely satisfactory at leading discussion; demonstrates a lack of understanding of the key issues in the debate in oral adjudication.",
	},
	{
		score: 5,
		description:
			"Accuracy: Broadly accurate call that gets the ‘obvious’ clashes correct; may fail to produce accurate judgement regarding ‘close’ comparisons, or may neglect a significant but not substantial part of the debate.\nReasoning/Justification: Some attempt at justifying decision; explanations demonstrating some appreciation of key clashes and issues; regular slippage into personal biases and assumptions, some of which may undermine the quality of the justification; lack of clarity regarding specific inter-team comparisons.\nDiscussion: Mostly inefficient at leading discussion; at times, struggles with catering to one or more voices on panel without reason; demonstrates lack of mature judgement in oral adjudication.",
	},
	{
		score: 4,
		description:
			"Accuracy: Inaccurate call that nonetheless identifies the ‘obvious’ rankings correctly; call reflects one or more misunderstandings of the debate; some inability to track important arguments/responses.\nReasoning/Justification: Unsatisfactory attempt at justifying decision; explanations demonstrate some appreciation of key clashes and issues, but may not warrant or justify the posited call; frequent slippage into personal biases and assumptions, some undermining the quality of the justification; lack of clarity regarding most inter-team comparisons.\nDiscussion: Incompetent at managing discussion; struggles to consider or include all members on panel; somewhat irrelevant in oral adjudication.",
	},
	{
		score: 3,
		description:
			"Accuracy: Inaccurate call failing to identify one or more of the ‘obvious’ rankings correctly; call reflects several misunderstandings of the debate, some of which may be fundamental; some inability to track important arguments/responses.\nReasoning/Justification: Poor attempt at justifying decision; explanations demonstrating no appreciation of key clashes and issues; frequent slippage into personal biases and assumptions, most of which certainly undermine the quality of the justification and severely distort the results; lack of clarity regarding most inter-team comparisons; justification occasionally slips into utter irrelevance.\nDiscussion: Incompetent at managing discussion; struggles to consider or include all members on panel; mostly irrelevant in oral adjudication.",
	},
	{
		score: 2,
		description:
			"Accuracy: Wildly inaccurate call that completely fails to identify more than one of the ‘obvious’ rankings correctly; call reflects several core misunderstandings of the debate; clear inability to track important arguments/responses.\nReasoning/Justification: Little to no attempt at justifying decision; explanations demonstrating no appreciation of key clashes and issues; frequent slippage into personal biases, irrelevance and assumptions, that cumulatively undermine the quality of the justification and severely skew the results; lack of clarity regarding most inter-team comparisons\nDiscussion: Very incompetent at managing discussion; struggles to consider any views of all members on panel; irrelevant and potentially counterproductive in oral adjudication.",
	},
	{
		score: 1,
		description:
			"Accuracy: Completely inaccurate call that absolutely fails to identify more than one of the ‘obvious’ rankings correctly; call reflects a fundamental and foundational misunderstandings of both the debate and British Parliamentary debating in general; clear inability to track important arguments/responses.\nReasoning/Justification: Effectively no rationalisable attempt at justifying decision; explanations demonstrating no or deeply erroneous appreciation of key clashes and issues; consistent slippage into unwarranted personal biases and assumptions that cumulatively undermine the quality of the justification and severely skew the results; utter irrelevance.\nDiscussion: Entirely incompetent at managing discussion; struggles to consider any views of all members on panel; irrelevant and very counterproductive in oral adjudication.",
	},
];
