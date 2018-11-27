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

export const handleUserRegistration = inputObj => (dispatch, state) => {
	console.log(inputObj);
};

export const handleUserLogin = inputObj => (dispatch, state) => {
	console.log(inputObj);
};

export const SUBMITTING_BEGIN = 'SUBMITTING_BEGIN';
export const _submittingBegin = () => ({
	type: SUBMITTING_BEGIN
});

export const SUBMITTING_SUCCESS = 'SUBMITTING_SUCCESS';
export const _submittingSuccess = () => ({
	type: SUBMITTING_SUCCESS
});

export const SUBMITTING_ERROR = 'SUBMITTING_ERROR';
export const _submittingError = () => ({
	type: SUBMITTING_ERROR
});
