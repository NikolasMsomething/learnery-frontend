import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  authCapturedError,
  handleUserLogin,
} from '../../../controller/actions';
import { validatePassword, validateUsername } from '../../common/validate';

class LoginForm extends Component {
  state = {
    warning: '',
    username: {
      dirty: false,
      input: '',
      valid: false,
    },
    password: {
      dirty: false,
      input: '',
      valid: false,
    },
  };

  handleLoginSubmit = (e) => {
    e.preventDefault();
    const { password, username } = this.state;
    this.setState({ warning: '' }, () => {
      try {
        validateUsername(username.input);
        validatePassword(password.input);

        this.props.dispatch(
          handleUserLogin({
            username: username.input,
            password: password.input,
          })
        );
      } catch (err) {
        this.setState({ warning: err.message });
      }
    });
  };

  manageUsernameInput = (e) => {
    // TODO: Add form validation
    // 2-16 characters
    // letters, numbers, -, and _ are valid
    const input = e.currentTarget.value;
    this.setState({
      username: {
        dirty: true,
        input: input,
        valid: true,
      },
    });
  };

  managePasswordInput = (e) => {
    // TODO: Add form validation
    const input = e.currentTarget.value;
    this.setState({
      password: {
        dirty: true,
        input: input,
        valid: true,
      },
    });
  };

  render() {
    const { warning } = this.state;
    let { authError, dispatch } = this.props;

    if (authError) {
      if (authError.code && authError.code === 401)
        authError = 'Incorrect email or password';
      else authError = 'Call the paramedics! Our servers are down';
      dispatch(authCapturedError());
      this.setState({ warning: authError });
    }

    return (
      <form onSubmit={this.handleLoginSubmit} className="loginModalForm">
        <div
          className="warning"
          style={authError || warning ? null : { visibility: 'hidden' }}
        >
          <p>{authError || warning}</p>
        </div>
        <label forHtml="username">Username</label>
        <input
          value={this.state.username.input}
          onChange={this.manageUsernameInput}
          type="text"
          name="username"
        />
        <label forHtml="username">Password</label>
        <input
          value={this.state.password.input}
          onChange={this.managePasswordInput}
          type="password"
          name="password"
        />
        <input type="submit" disabled={this.props.submitting} />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  submitting: state.landing.submitting,
  authError: state.auth.error,
});

export default connect(mapStateToProps)(LoginForm);
