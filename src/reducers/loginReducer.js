import { OPEN_LOGIN_MODAL, CLOSE_LOGIN_MODAL } from "../actions/index";

const initialState = {
	name: "nick",
	authToken: undefined,
	loggedIn: false,
	username: "nikoclops",
	loginModalOpen: false
};

export const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case OPEN_LOGIN_MODAL: {
			return Object.assign({}, state, {
				loginModalOpen: true
			});
		}
		case CLOSE_LOGIN_MODAL: {
			return Object.assign({}, state, {
				loginModalOpen: false
			});
		}
		default:
			return state;
	}
};
