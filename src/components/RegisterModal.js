import React from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { closeRegisterModal, closeLoginModal } from "../actions/index";
import "./Register.scss";
import { AwesomeButton } from "react-awesome-button";
import styles from "react-awesome-button/src/styles/themes/theme-amber";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		alignItems: "center",
		display: "flex",
		flexDirection: "column",
		height: "538px",
		padding: 1 + "%",
		width: 100 + "%",
		maxWidth: "400px",
		justifyContent: "center",
		backgroundColor: "var(--lnGold)",
		border: "solid 3px black",
		overlay: {
			backgroundColor: "blue"
		}
	}
};

function RegisterModal(props) {
	return (
		<div>
			<Modal
				isOpen={props.registerModalOpen}
				style={customStyles}
				contentLabel="Example Modal"
				onRequestClose={() => {
					props.dispatch(closeRegisterModal());
					props.dispatch(closeLoginModal());
				}}
				shouldCloseOnOverlayClick={true}
			>
				<h2
					style={{
						paddingTop: 2 + "%",
						marginBottom: "3rem",
						fontFamily: "Permanent Marker",
						fontSize: "2.5rem",
						paddingBottom: "3px",
						borderBottom: "1px black solid"
					}}
				>
					Register
				</h2>
				<button
					style={{ position: "absolute", top: 3, right: 3 }}
					onClick={() => {
						props.dispatch(closeRegisterModal());
						props.dispatch(closeLoginModal());
					}}
				>
					close
				</button>

				<form
					onSubmit={e => {
						e.preventDefault();
						console.log(
							e.currentTarget.username.value,
							e.currentTarget.email.value,
							e.currentTarget.password.value
						);
					}}
					className="registerModalForm"
				>
					<label forHtml="username">Username</label>
					<input type="text" name="username" />
					<label forHtml="username">Email</label>
					<input type="text" name="email" />
					<label forHtml="username">Password</label>
					<input type="password" name="password" />
					<input type="submit" />
				</form>
			</Modal>
		</div>
	);
}

const mapStateToProps = state => {
	return {
		registerModalOpen: state.register.registerModalOpen
	};
};

export default connect(mapStateToProps)(RegisterModal);
