import { OPEN_LOGIN_MODAL, OPEN_REGISTER_MODAL, CLOSE_MODALS } from '../actions';

const initialState = {
	name: 'nick',
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
		default:
			return state;
	}
};

export default landingReducer;
