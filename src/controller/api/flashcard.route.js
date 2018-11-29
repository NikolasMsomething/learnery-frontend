import { BACKEND_URL, goFetch } from "./config";
import { toggleExpandCard, newCard } from "../../controller/actions/";
/**
 * TODO: Complete this stub.
 * @returns {{}} the next flashcard.
 */
const next = nextObj => goFetch(BACKEND_URL + "/api/flashcard");
/**
 * TODO: Complete this stub.
 * @param {{confidence: "0"}} answerObj
 */
const submitAnswer = answerObj =>
	goFetch(BACKEND_URL + "/api/flashcard", {
		method: "POST",
		body: answerObj
	});

/**
 * Exposes the flashcard endpoint from the backend.
 */
const flashcard = {
	next,
	submitAnswer
};

export default flashcard;
