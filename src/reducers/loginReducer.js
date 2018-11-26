const initialState = {
	name: "nick"
};

export const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case "TEST": {
			return Object.assign({}, state, {
				name: action.value
			});
		}
		default:
			return state;
	}
};
