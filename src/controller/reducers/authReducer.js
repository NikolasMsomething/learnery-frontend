import { AUTH_SUBMIT, AUTH_SUCCESS, AUTH_ERROR } from '../actions';

const initialState = {
	authToken: undefined,
	loggedIn: false,
	user: null,
	submitting: false,
	error: null
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case AUTH_SUBMIT: {
			return Object.assign({}, state, {
				submitting: true
			});
		}
		case AUTH_SUCCESS: {
			const { authToken } = action.payload;
			delete action.payload.authToken;
			return Object.assign({}, state, {
				submitting: false,
				user: action.payload,
				loggedIn: true,
				authToken
			});
		}
		case AUTH_ERROR: {
			return Object.assign({}, initialState, { error: action.payload });
		}
		default:
			return state;
	}
};

export default authReducer;
