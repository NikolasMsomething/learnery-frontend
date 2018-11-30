import React, { Component } from 'react';
import { connect } from 'react-redux';

class Stats extends Component {
	render() {
		return <div>Hello from Stats!</div>;
	}
}

export default connect()(Stats);
