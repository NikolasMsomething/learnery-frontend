import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  handleUserRegistration,
  authCapturedError,
} from '../../../controller/actions';
import {
  validatePassword,
  validateUsername,
  validateEmail,
} from '../../common/validate';

class RegisterForm extends Component {
  state = {
    warning: '',
    username: {
      dirty: false,
      input: '',
      valid: false,
    },
    email: {
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

  handleRegisterSubmit = (e) => {
    e.preventDefault();
    const { password, email, username } = this.state;

    this.setState({ warning: '' }, () => {
      try {
        validateUsername(username.input);
        validateEmail(email.input);
        validatePassword(password.input);

        this.props.dispatch(
          handleUserRegistration({
            username: username.input,
            email: email.input,
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

  manageEmailInput = (e) => {
    // TODO: Add form validation
    const input = e.currentTarget.value;
    this.setState({
      email: {
        dirty: true,
        input: input,
        valid: true,
      },
    });
  };

  render() {
    let { authError, dispatch } = this.props;
    const { warning } = this.state;

    if (authError) {
      if (authError.code && authError.code === 403)
        authError = authError.message;
      else authError = 'Call the paramedics! Our servers are down';
      dispatch(authCapturedError());
      this.setState({ warning: authError });
    }

    return (
      <form onSubmit={this.handleRegisterSubmit} className="registerModalForm">
        <div
          className="warning"
          style={authError || warning ? null : { visibility: 'hidden' }}
        >
          <p>{authError || warning}</p>
        </div>

        <label htmlFor="username">Username</label>
        <input
          value={this.state.username.input}
          onChange={this.manageUsernameInput}
          type="text"
          name="username"
        />
        <label htmlFor="username">Email</label>
        <input
          value={this.state.email.input}
          onChange={this.manageEmailInput}
          type="text"
          name="email"
        />
        <label htmlFor="username">Password</label>
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

export default connect(mapStateToProps)(RegisterForm);
