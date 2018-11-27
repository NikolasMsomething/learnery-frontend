import React, { Component } from "react";

import { connect } from "react-redux";
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";

class Modal extends Component {
	render() {
		console.log(this.props, "line20");
		if (this.props.loginModalOpen) {
			return <LoginModal />;
		}
		if (this.props.registerModalOpen) {
			return <RegisterModal />;
		}
		if (!this.props.registerModalOpen && !this.props.loginModalOpen) {
			return <></>;
		}
	}
}

const mapStateToProps = state => {
	console.log(state);
	return {
		loginModalOpen: state.login.loginModalOpen,
		registerModalOpen: state.register.registerModalOpen
	};
};

export default connect(mapStateToProps)(Modal);
