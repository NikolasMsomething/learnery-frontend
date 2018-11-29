import api from "../api";

export const CLOSE_MODALS = "CLOSE_MODALS";
export const closeModals = () => ({
	type: CLOSE_MODALS
});

export const OPEN_REGISTER_MODAL = "OPEN_REGISTER_MODAL";
export const openRegisterModal = () => ({
	type: OPEN_REGISTER_MODAL
});

export const OPEN_LOGIN_MODAL = "OPEN_LOGIN_MODAL";
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

export const handleAuthRefresh = () => dispatch => {
	dispatch(authSubmit());
	api.auth
		.refresh()
		.then(res => dispatch(authSuccess(res)))
		.catch(err => dispatch(authError(err)));
};

export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const authSuccess = user => ({
	type: AUTH_SUCCESS,
	payload: user
});

export const AUTH_SUBMIT = "AUTH_SUBMIT";
const authSubmit = () => ({
	type: AUTH_SUBMIT
});

export const AUTH_ERROR = "AUTH_ERROR";
const authError = err => ({
	type: AUTH_SUCCESS,
	payload: err
});

export const TOGGLE_EXPAND_CARD = "TOGGLE_EXPAND_CARD";
export const toggleExpandCard = () => {
	return {
		type: TOGGLE_EXPAND_CARD
	};
};

export const NEW_CARD_SUBMIT = "NEW_CARD_SUBMIT";
export const newCardSubmit = value => {
	return {
		type: NEW_CARD_SUBMIT,
		value
	};
};

export const NEW_CARD_SUCCESS = "NEW_CARD_SUCCESS";
export const newCardSuccess = value => ({
	type: NEW_CARD_SUCCESS,
	value
});

export const NEW_CARD_ERROR = "NEW_CARD_ERROR";
export const newCardError = value => ({
	type: NEW_CARD_ERROR,
	value
});

export const handleNext = () => dispatch => {
	dispatch(newCardSubmit());
	return api.flashcard
		.next()
		.then(res => dispatch(newCardSuccess(res)))
		.catch(err => dispatch(newCardError()));
};

export const ANSWER_SUCCESS = "ANSWER_SUCCESS";
export const answerSuccess = value => ({
	type: ANSWER_SUCCESS,
	value
});

export const ANSWER_SUBMIT = "ANSWER_SUBMIT";
const answerSubmit = value => ({
	type: ANSWER_SUBMIT,
	value
});

export const ANSWER_ERROR = "ANSWER_ERROR";
const answerError = value => ({
	type: ANSWER_ERROR,
	value
});

export const handleAnswerSubmit = ans => dispatch => {
	dispatch(answerSubmit());
	api.flashcard
		.submitAnswer(ans)
		.then(res => {
			console.log(res, "line 102");
			dispatch(answerSuccess(res));
		})
		.catch(err => {
			console.log(err);
			return dispatch(answerError());
		});
};
