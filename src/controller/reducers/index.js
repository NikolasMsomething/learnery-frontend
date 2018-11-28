import landingReducer from "./landingReducer";
import learnAppReducer from "./learnAppReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
	landing: landingReducer,
	learn: learnAppReducer
});

export default rootReducer;
