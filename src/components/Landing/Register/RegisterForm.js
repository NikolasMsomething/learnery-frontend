import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleUserRegistration } from '../../../controller/actions';

class RegisterForm extends Component {
	state = {
		username: {
			dirty: false,
			input: '',
			valid: false
		},
		email: {
			dirty: false,
			input: '',
			valid: false
		},
		password: {
			dirty: false,
			input: '',
			valid: false
		}
	};

	handleRegisterSubmit = e => {
		e.preventDefault();
		const { password, email, username } = this.state;
		if (password.valid && email.valid && username.valid) {
			this.props.dispatch(
				handleUserRegistration({ username: username.input, email: email.input, password: password.input })
			);
		}
	};

	manageUsernameInput = e => {
		// TODO: Add form validation
		// 2-16 characters
		// letters, numbers, -, and _ are valid
		const input = e.currentTarget.value;
		this.setState({
			username: {
				dirty: true,
				input: input,
				valid: true
			}
		});
	};

	managePasswordInput = e => {
		// TODO: Add form validation
		const input = e.currentTarget.value;
		this.setState({
			password: {
				dirty: true,
				input: input,
				valid: true
			}
		});
	};

	manageEmailInput = e => {
		// TODO: Add form validation
		const input = e.currentTarget.value;
		this.setState({
			email: {
				dirty: true,
				input: input,
				valid: true
			}
		});
	};

	render() {
		return (
			<form onSubmit={this.handleRegisterSubmit} className="registerModalForm">
				<label forHtml="username">Username</label>
				<input
					value={this.state.username.input}
					onChange={this.manageUsernameInput}
					type="text"
					name="username"
				/>
				<label forHtml="username">Email</label>
				<input value={this.state.email.input} onChange={this.manageEmailInput} type="text" name="email" />
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

const mapStateToProps = state => ({
	submitting: state.landing.submitting
});

export default connect(mapStateToProps)(RegisterForm);
