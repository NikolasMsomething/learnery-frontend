import React from "react";
import { connect } from "react-redux";
import { openLoginModal, closeRegisterModal } from "../actions/index";
import "./Login.scss";
import { AwesomeButton } from "react-awesome-button";
import styles from "react-awesome-button/src/styles/themes/theme-amber";

function Login(props) {
	return (
		<section className="loginSection">
			<img
				className="learneryLogo"
				src={require("../pictures/Learnery_Logo.png")}
				alt=""
			/>
			<p className="loginFirstP">
				Will you pass your software <br /> engineering interviews?
			</p>
			<p className="loginSecondP">
				Get ahead of the pack by practicing programming trivia on Learnery!{" "}
			</p>
			<AwesomeButton
				type="secondary"
				action={e => {
					props.dispatch(closeRegisterModal());
					props.dispatch(openLoginModal());
				}}
			>
				Continue
			</AwesomeButton>
		</section>
	);
}

const mapStateToProps = state => {
	return {
		name: state.login.name
	};
};
export default connect(mapStateToProps)(Login);
