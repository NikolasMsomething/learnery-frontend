import { loginReducer } from "./loginReducer";
import { registerReducer } from "./registerReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
	login: loginReducer,
	register: registerReducer
});

export default rootReducer;
