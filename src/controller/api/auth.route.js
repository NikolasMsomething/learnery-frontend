import cache from './cache';
import { BACKEND_URL, goFetch } from './config';
const BASE_URL = BACKEND_URL + '/auth';

/**
 * This object exposes auth endpoints from the Learnery backend.
 */
const auth = {
	/**
	 * Registers a user with the backend server.
	 * @param {{username: string, email: string, password: string}} credentials
	 * @returns {{username: string, createdAt: string, updatedAt: string}}
	 * @throws if user is not properly authenticated
	 * @throws if any fields are missing
	 */
	register(credentials) {
		return goFetch(BASE_URL + '/register', {
			method: 'POST',
			body: credentials,
			auth: false
		}).then(res => {
			cache.authToken.save(res.authToken);
			return res;
		});
	},

	/**
	 * Logs in to the backend server and stores token for future requests.
	 * @param {{username: string, password: string}} credentials
	 * @returns {{username: string, createdAt: string, updatedAt: string}}
	 * @throws if user is not properly authenticated
	 */
	login(credentials) {
		return goFetch(BASE_URL + '/login', {
			method: 'POST',
			body: credentials,
			auth: false
		}).then(res => {
			cache.authToken.save(res.authToken);
			return res;
		});
	},

	/**
	 * Exchanges auth token for new auth token.
	 * @returns {Boolean} true/false if auth succeeded and token is available for queries.
	 */
	refresh() {
		return goFetch(BASE_URL + '/refresh', { method: 'POST' }).then(res => {
			cache.authToken.save(res.authToken);
			return res;
		});
	}
};

export default auth;
