import type { Bracket, SpeakerBracket } from "./types";

export const isSpeakerBracket = (
	bracket: Bracket,
): bracket is SpeakerBracket => {
	return (bracket as SpeakerBracket).minScore !== undefined;
};
