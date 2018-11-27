import { OPEN_REGISTER_MODAL, CLOSE_REGISTER_MODAL } from "../actions/index";

const initialState = {
	registerModalOpen: false
};

export const registerReducer = (state = initialState, action) => {
	switch (action.type) {
		case OPEN_REGISTER_MODAL: {
			return Object.assign({}, state, {
				registerModalOpen: true
			});
		}
		case CLOSE_REGISTER_MODAL: {
			return Object.assign({}, state, {
				registerModalOpen: false
			});
		}
		default:
			return state;
	}
};
