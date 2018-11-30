import { BACKEND_URL, goFetch } from './config';
const BASE_URL = BACKEND_URL + '/api/stats';

/**
 * Exposes the stats endpoint from the backend.
 */
const stats = {
	/**
	 * Gets both userStats and cardStats
	 * @returns {{userStats, cardStats}}
	 */
	get() {
		return goFetch(BASE_URL);
	}
};

export default stats;
