import { OPEN_LOGIN_MODAL, CLOSE_LOGIN_MODAL, OPEN_REGISTER_MODAL, CLOSE_REGISTER_MODAL } from '../actions';

const initialState = {
	name: 'nick',
	authToken: undefined,
	loggedIn: false,
	username: 'nikoclops',
	showLoginModal: false,
	showRegisterModal: false
};

const landingReducer = (state = initialState, action) => {
	switch (action.type) {
		case OPEN_LOGIN_MODAL: {
			return Object.assign({}, state, {
				showLoginModal: true
			});
		}
		case CLOSE_LOGIN_MODAL: {
			return Object.assign({}, state, {
				showLoginModal: false
			});
		}
		case OPEN_REGISTER_MODAL: {
			return Object.assign({}, state, {
				showRegisterModal: true
			});
		}
		case CLOSE_REGISTER_MODAL: {
			return Object.assign({}, state, {
				showRegisterModal: false
			});
		}
		default:
			return state;
	}
};

export default landingReducer;
