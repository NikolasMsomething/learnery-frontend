import landingReducer from './landingReducer';
import learnAppReducer from './learnAppReducer';
import authReducer from './authReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	auth: authReducer,
	landing: landingReducer,
	learn: learnAppReducer
});

export default rootReducer;
