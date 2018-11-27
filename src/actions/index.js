export const OPEN_LOGIN_MODAL = "OPEN_LOGIN_MODAL";
export const OPEN_REGISTER_MODAL = "OPEN_REGISTER_MODAL";
export const CLOSE_LOGIN_MODAL = "CLOSE_LOGIN_MODAL";
export const CLOSE_REGISTER_MODAL = "CLOSE_REGISTER_MODAL";
export const openRegisterModal = value => {
	return {
		type: OPEN_REGISTER_MODAL,
		value
	};
};
export const openLoginModal = value => {
	return {
		type: OPEN_LOGIN_MODAL,
		value
	};
};
export const closeRegisterModal = value => {
	return {
		type: CLOSE_REGISTER_MODAL,
		value
	};
};
export const closeLoginModal = value => {
	return {
		type: CLOSE_LOGIN_MODAL,
		value
	};
};
