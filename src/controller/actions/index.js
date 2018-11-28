import api from '../api';

export const CLOSE_MODALS = 'CLOSE_MODALS';
export const closeModals = () => ({
	type: CLOSE_MODALS
});

export const OPEN_REGISTER_MODAL = 'OPEN_REGISTER_MODAL';
export const openRegisterModal = () => ({
	type: OPEN_REGISTER_MODAL
});

export const OPEN_LOGIN_MODAL = 'OPEN_LOGIN_MODAL';
export const openLoginModal = () => ({
	type: OPEN_LOGIN_MODAL
});

export const handleUserRegistration = input => (dispatch, state) => {
	// TODO: Add more sophisticated error handling
	dispatch(authSubmit());
	api.auth
		.register(input)
		.then(res => dispatch(authSuccess(res)))
		.catch(err => dispatch(authError(err)));
};

export const handleUserLogin = input => (dispatch, state) => {
	// TODO: Add more sophisticated error handling
	dispatch(authSubmit());
	api.auth
		.login(input)
		.then(res => dispatch(authSuccess(res)))
		.catch(err => dispatch(authError(err)));
};

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = user => ({
	type: AUTH_SUCCESS,
	payload: user
});

export const AUTH_SUBMIT = 'AUTH_SUBMIT';
const authSubmit = () => ({
	type: AUTH_SUBMIT
});

export const AUTH_ERROR = 'AUTH_ERROR';
const authError = err => ({
	type: AUTH_SUCCESS,
	payload: err
});

export const EXPAND_CARD = 'EXPAND_CARD';
export const expandCard = () => {
	return {
		type: EXPAND_CARD
	};
};

export const SEND_ANSWER = 'SEND_ANSWER';
