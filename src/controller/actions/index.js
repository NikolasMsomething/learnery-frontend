export const closeModals = () => dispatch => {
	dispatch(_closeRegisterModal());
	dispatch(_closeLoginModal());
};

export const openRegisterModal = () => dispatch => {
	dispatch(_closeLoginModal());
	dispatch(_dispatchOpenRegisterModal());
};

export const openLoginModal = () => dispatch => {
	dispatch(_closeRegisterModal());
	dispatch(_dispatchOpenLoginModal());
};

export const OPEN_REGISTER_MODAL = 'OPEN_REGISTER_MODAL';
const _dispatchOpenRegisterModal = () => ({
	type: OPEN_REGISTER_MODAL
});

export const OPEN_LOGIN_MODAL = 'OPEN_LOGIN_MODAL';
const _dispatchOpenLoginModal = () => ({
	type: OPEN_LOGIN_MODAL
});

export const CLOSE_REGISTER_MODAL = 'CLOSE_REGISTER_MODAL';
export const _closeRegisterModal = () => {
	return {
		type: CLOSE_REGISTER_MODAL
	};
};

export const CLOSE_LOGIN_MODAL = 'CLOSE_LOGIN_MODAL';
export const _closeLoginModal = () => {
	return {
		type: CLOSE_LOGIN_MODAL
	};
};
