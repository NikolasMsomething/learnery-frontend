import React from "react";
import "./Header.scss";
import { AwesomeButton } from "react-awesome-button";
import styles from "react-awesome-button/src/styles/themes/theme-amber";
import { connect } from "react-redux";
import Modal from "react-modal";
import {
	openLoginModal,
	closeRegisterModal,
	closeLoginModal
} from "../actions/index";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)"
	}
};

function Header(props) {
	let rightSideComp = (
		<AwesomeButton
			action={e => {
				props.dispatch(closeRegisterModal());
				props.dispatch(openLoginModal());

				console.log("hello");
			}}
			className="headerBarBtn"
		>
			Login
		</AwesomeButton>
	);

	if (props.authToken) {
		rightSideComp = props.username;
	}

	return (
		<>
			<header className="headerBar">
				<img src={require("../pictures/GitHub-Mark-64px.png")} />
				{rightSideComp}
			</header>
		</>
	);
}

const mapStateToProps = state => {
	return {
		authToken: state.login.authToken,
		username: state.login.username
	};
};

export default connect(mapStateToProps)(Header);
