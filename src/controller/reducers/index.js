import landingReducer from './landingReducer';
import learnAppReducer from './learnAppReducer';
import authReducer from './authReducer';
import statsReducer from './statsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	auth: authReducer,
	landing: landingReducer,
	learn: learnAppReducer,
	stats: statsReducer
});

export default rootReducer;
