import SimpleReactRouter from 'simple-react-router';
import { connect } from 'react-redux';
import Register from '../Register.js';
import Login from '../Login.js';

class Router extends SimpleReactRouter {
	getRoutes(map, props) {
		if (!props.authToken) {
			map('/', Register);
		} else {
			map('/', Login);
		}
	}
}

const mapStateToProps = state => {
	return {
		name: state.login.name,
		authToken: state.login.authToken
	};
};

export default connect(mapStateToProps)(Router);
