import React from "react";
import { connect } from "react-redux";
import { openRegisterModal, closeLoginModal } from "../actions/index";
import "./Register.scss";
import { AwesomeButton } from "react-awesome-button";
import styles from "react-awesome-button/src/styles/themes/theme-amber";

function Register(props) {
	return (
		<section className="registerSection">
			<img
				className="learneryLogo"
				src={require("../pictures/Learnery_Logo.png")}
				alt=""
			/>
			<p className="registerFirstP">
				Will you pass your software <br /> engineering interviews?
			</p>
			<p className="registerSecondP">
				Get ahead of the pack by practicing programming trivia on Learnery!{" "}
			</p>
			<AwesomeButton
				className="aws-register"
				type="secondary"
				action={e => {
					props.dispatch(closeLoginModal());
					props.dispatch(openRegisterModal());
				}}
			>
				Get Started!
			</AwesomeButton>
		</section>
	);
}

const mapStateToProps = state => {
	return {
		name: state.login.name
	};
};
export default connect(mapStateToProps)(Register);
