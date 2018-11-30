import { BACKEND_URL, goFetch } from './config';

/**
 * Exposes the flashcard endpoint from the backend.
 */
const flashcard = {
	/**
	 * TODO: Complete this stub.
	 * @returns {{}} the next flashcard.
	 */
	next(nextObj) {
		return goFetch(BACKEND_URL + '/api/flashcard');
	},

	/**
	 * TODO: Complete this stub.
	 * @param {{confidence: "0"}} answerObj
	 */
	submitAnswer(answerObj) {
		return goFetch(BACKEND_URL + '/api/flashcard', {
			method: 'POST',
			body: answerObj
		});
	}
};

export default flashcard;
