import { EXPAND_CARD } from "../actions";

const initialState = {
	currentCard: {
		question: "What is this doing sfhusdhf jshdfh jsdhf hdsfh sdfh ahsd fh",
		answer: "These are the answers",
		expanded: false
	}
};

const learnAppReducer = (state = initialState, action) => {
	switch (action.type) {
		case EXPAND_CARD: {
			return Object.assign({}, state, {
				currentCard: {
					...state.currentCard,
					expanded: !state.currentCard.expanded
				}
			});
		}
		default:
			return state;
	}
};

export default learnAppReducer;
