import React, { Component } from 'react';
import { handleUserLogin } from '../controller/actions/index';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Demo extends Component {
  componentDidMount() {
    this.props.dispatch(
      handleUserLogin({ username: 'niktest123', password: 'password123' })
    );
  }

  render() {
    return <div>{this.props.authToken && <Redirect to="/learn" />}</div>;
  }
}

function mapStateToProps(state) {
  return {
    authToken: state.auth.authToken
  };
}

export default connect(mapStateToProps)(Demo);
