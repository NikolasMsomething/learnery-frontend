import {
	TOGGLE_EXPAND_CARD,
	NEW_CARD,
	ANSWER_SUBMIT,
	ANSWER_SUCCESS,
	ANSWER_ERROR,
	NEW_CARD_SUCCESS,
	NEW_CARD_SUBMIT,
	NEW_CARD_ERROR
} from "../actions";

const initialState = {
	currentCard: {
		question: "",
		answer: "",
		expanded: false
	},
	submitting: false,
	error: null
};

const learnAppReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_EXPAND_CARD: {
			return Object.assign({}, state, {
				currentCard: {
					...state.currentCard,
					expanded: !state.currentCard.expanded
				}
			});
		}
		case NEW_CARD_SUCCESS: {
			return Object.assign({}, state, {
				currentCard: {
					...state.currentCard,
					question: action.value.question,
					answer: action.value.answer,
					expanded: false
				}
			});
		}
		case NEW_CARD_SUBMIT: {
			return Object.assign({}, state, {
				submitting: true
			});
		}
		case NEW_CARD_ERROR: {
			return Object.assign({}, state, {
				error: action.value
			});
		}
		case ANSWER_SUBMIT: {
			return Object.assign({}, state, {
				submitting: true
			});
		}
		case ANSWER_SUCCESS: {
			let { question, answer } = action.value;
			return Object.assign({}, state, {
				submitting: false,
				currentCard: {
					...state.currentCard,
					question: question,
					answer: answer,
					expanded: false
				}
			});
		}
		case ANSWER_ERROR: {
			return Object.assign({}, initialState, { error: action.value });
		}

		default:
			return state;
	}
};

export default learnAppReducer;
