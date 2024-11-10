import type { SpeakerBracket } from "./types";

export const isSpeakerBracket = (
	bracket: unknown,
): bracket is SpeakerBracket => {
	return (
		typeof bracket === "object" &&
		bracket !== null &&
		(bracket as SpeakerBracket).minScore !== undefined
	);
};
