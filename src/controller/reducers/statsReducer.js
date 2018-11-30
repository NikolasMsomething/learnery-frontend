import { STATS_SUBMIT, STATS_GET_SUCCESS, STATS_GET_ERROR } from '../actions';

const initialState = {
	submitting: true,
	error: null,
	userStats: null,
	cardStats: null
};

const statsReducer = (state = initialState, action) => {
	switch (action.type) {
		case STATS_SUBMIT: {
			return Object.assign({}, state, {
				submitting: true,
				error: null
			});
		}
		case STATS_GET_SUCCESS: {
			console.log(action.payload);
			return Object.assign({}, state, {
				submitting: false,
				error: null,
				userStats: action.payload.userStats,
				cardStats: action.payload.cardStats
			});
		}
		case STATS_GET_ERROR: {
			return Object.assign({}, initialState, { error: action.payload });
		}
		default:
			return state;
	}
};

export default statsReducer;
