import landingReducer from './landingReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	landing: landingReducer
});

export default rootReducer;
