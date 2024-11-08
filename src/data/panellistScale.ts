import type { JudgeBracket } from "../types";

export const panellistScale: JudgeBracket[] = [
	{
		score: 10,
		description:
			"Accuracy: Extremely accurate call, reflected through precise appreciation and very meticulous assessment of ‘close’ comparisons between teams (reflected through speaker scores); comprehensive recognition of all necessary inter-team comparisons.\nReasoning/Justification: Extremely well-justified justification, evidenced by flawlessly or near-flawlessly outlined explanations that are in-depth, insightful, and nuanced; explicit identification and strong justification for any weighing metrics or assumptions employed in judging; certainly should chair.\nDiscussion: Outstanding contribution to the discussion that reflects exceptional judgement concerning what is relevant and useful to discussion, with a clear sense of prioritisation; highly helpful; incisive in commentary.",
	},
	{
		score: 9,
		description:
			"Accuracy: Very accurate call, reflected through appreciation and correct assessment of ‘close’ comparisons between teams (reflected through speaker scores); comprehensive recognition of most necessary inter-team comparisons.\nReasoning/Justification: Very well-justified justification, evidenced by well-outlined explanations that are in-depth, insightful, and nuanced; good attempts made to justify weighing metrics in judging; should chair.\nDiscussion: Valuable contribution to the discussion that reflects good judgement concerning what is relevant and useful to discussion; very helpful.",
	},
	{
		score: 8,
		description:
			"Accuracy: Accurate call, reflected through largely correct judgement regarding ‘close’ comparisons between teams; detailed recognition of most necessary inter-team comparisons.\nReasoning/Justification: Comprehensively justified justification, evidenced by well-outlined explanations that are in-depth and nuanced; very occasional slippage into minor assumptions or personal biases in judging, or minor lack of clarity in one or more inter-team comparisons; metrics for judging are identified but not explicitly justified; high potential to chair.\nDiscussion: Comprehensive contribution to the discussion that reflects good judgement concerning what is relevant and useful to discussion; very helpful.",
	},
	{
		score: 7,
		description:
			"Accuracy: Accurate call, reflected through generally correct rankings but potentially wrong regarding ‘close’ comparisons between teams; careful acknowledgment of most necessary inter-team comparisons in consideration.\nReasoning/Justification: Generally well-justified justification, evidenced by well-outlined explanations; occasional slippage into minor personal biases and assumptions, or minor lack of clarity in some inter-team comparisons; has potential to chair.\nDiscussion: Good contribution to the discussion that reflects mostly good judgement about what is relevant and useful to discussion; helpful, with only minor lapses in attention and judgement.",
	},
	{
		score: 6,
		description:
			"Accuracy: Mostly accurate call, although may fail to get ‘close’ comparisons between teams correct.\nReasoning/Justification: Good attempt at justifying decision; explanations demonstrating some appreciation of key clashes and how they are resolved; occasional slippage into minor or insignificant personal biases and assumptions; lack of clarity in some inter-team comparisons.\nDiscussion: Good contribution to the discussion that reflects mostly good judgments concerning what is relevant to discussion; helpful, with some lapses in attention and judgement.",
	},
	{
		score: 5,
		description:
			"Accuracy: Broadly accurate call that gets the ‘obvious’ clashes correct; may fail to produce accurate judgement regarding ‘close’ comparisons, or may neglect a significant but not substantial part of the debate.\nReasoning/Justification: Some attempt at justifying decision; explanations demonstrating some appreciation of key clashes and issues; regular slippage into personal biases and assumptions, some of which may undermine the quality of the justification; lack of clarity regarding specific inter-team comparisons.\nDiscussion: Average contribution to the discussion that reflects some judgement concerning what is relevant to discussion; mostly helpful, but may be unresponsive to prompts or generic at times.",
	},
	{
		score: 4,
		description:
			"Accuracy: Inaccurate call that nonetheless identifies the ‘obvious’ rankings correctly; call reflects one or more misunderstandings of the debate; some inability to track important arguments/responses.\nReasoning/Justification: Unsatisfactory attempt at justifying decision; explanations demonstrate some appreciation of key clashes and issues, but may not warrant or justify the posited call; frequent slippage into personal biases and assumptions, some undermining the quality of the justification; lack of clarity regarding most inter-team comparisons.\nDiscussion: Average contribution to the discussion that can be at times irrelevant; sometimes helpful, but frequently unresponsive to prompts or generic.",
	},
	{
		score: 3,
		description:
			"Accuracy: Inaccurate call failing to identify one or more of the ‘obvious’ rankings correctly; call reflects several misunderstandings of the debate, some of which may be fundamental; some inability to track important arguments/responses.\nReasoning/Justification: Poor attempt at justifying decision; explanations demonstrating no appreciation of key clashes and issues; frequent slippage into personal biases and assumptions, most of which certainly undermine the quality of the justification and severely distort the results; lack of clarity regarding most inter-team comparisons; justification occasionally slips into utter irrelevance.\nDiscussion: Below-average contribution to the discussion that reflects somewhat flawed understanding; rarely helpful; generic or occasionally unhelpful commentary.",
	},
	{
		score: 2,
		description:
			"Accuracy: Wildly inaccurate call that completely fails to identify more than one of the ‘obvious’ rankings correctly; call reflects several core misunderstandings of the debate; clear inability to track important arguments/responses.\nReasoning/Justification: Little to no attempt at justifying decision; explanations demonstrating no appreciation of key clashes and issues; frequent slippage into personal biases, irrelevance and assumptions, that cumulatively undermine the quality of the justification and severely skew the results; lack of clarity regarding most inter-team comparisons.\nDiscussion: Poor contribution to the discussion; unhelpful; at times counterproductive to discussion.",
	},
	{
		score: 1,
		description:
			"Accuracy: Completely inaccurate call that absolutely fails to identify more than one of the ‘obvious’ rankings correctly; call reflects a fundamental and foundational misunderstandings of both the debate and British Parliamentary debating in general; clear inability to track important arguments/responses.\nReasoning/Justification: Effectively no rationalisable attempt at justifying decision; explanations demonstrating no or deeply erroneous appreciation of key clashes and issues; consistent slippage into unwarranted personal biases and assumptions that cumulatively undermine the quality of the justification and severely skew the results; utter irrelevance.\nDiscussion: Very poor contribution to the discussion; highly obstructionist; detrimental to the panel.",
	},
];
