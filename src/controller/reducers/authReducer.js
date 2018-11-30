import { AUTH_SUBMIT, AUTH_SUCCESS, AUTH_ERROR, LOG_OUT } from "../actions";

const initialState = {
	authToken: null,
	loggedIn: false,
	user: null,
	submitting: false,
	error: null
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case AUTH_SUBMIT: {
			return Object.assign({}, state, {
				submitting: true,
				error: null
			});
		}
		case AUTH_SUCCESS: {
			const { authToken } = action.payload;
			delete action.payload.authToken;
			return Object.assign({}, state, {
				submitting: false,
				error: null,
				user: action.payload,
				loggedIn: true,
				authToken
			});
		}
		case AUTH_ERROR: {
			return Object.assign({}, initialState, { error: action.payload });
		}
		case LOG_OUT: {
			return Object.assign({}, initialState);
		}
		default:
			return state;
	}
};

export default authReducer;
