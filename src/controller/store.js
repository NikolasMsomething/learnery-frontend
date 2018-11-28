import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index.js';
import cache from './api/cache';
import { handleAuthRefresh } from './actions';

const store = createStore(rootReducer, applyMiddleware(thunk));

const authToken = cache.authToken.load();
if (authToken) {
	store.dispatch(handleAuthRefresh());
}

export default store;
