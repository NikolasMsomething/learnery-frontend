import {
	OPEN_LOGIN_MODAL,
	OPEN_REGISTER_MODAL,
	CLOSE_MODALS,
	SUBMITTING_BEGIN
	// SUBMITTING_ERROR,
	// SUBMITTING_SUCCESS
} from '../actions';

const initialState = {
	name: 'nick',
	authToken: undefined,
	loggedIn: false,
	username: 'nikoclops',
	showLoginModal: false,
	showRegisterModal: false,
	submitting: false
};

const landingReducer = (state = initialState, action) => {
	switch (action.type) {
		case OPEN_LOGIN_MODAL: {
			return Object.assign({}, state, {
				showLoginModal: true
			});
		}
		case OPEN_REGISTER_MODAL: {
			return Object.assign({}, state, {
				showRegisterModal: true,
				showLoginModal: false
			});
		}
		case CLOSE_MODALS: {
			return Object.assign({}, state, {
				showRegisterModal: false,
				showLoginModal: false
			});
		}
		case SUBMITTING_BEGIN: {
			return Object.assign({}, state, {
				submitting: true
			});
		}

		default:
			return state;
	}
};

export default landingReducer;
