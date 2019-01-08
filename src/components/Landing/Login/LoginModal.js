import React from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { IoIosCloseCircle } from "react-icons/io";
import { closeModals } from "../../../controller/actions";
import LoginForm from "./LoginForm";

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

function LoginModal(props) {
	Modal.setAppElement("main");
	return (
		<>
			{props.loggedIn && <Redirect to="/learn" />}
			<Modal
				isOpen={true}
				style={customStyles}
				contentLabel="Example Modal"
				onRequestClose={() => {
					props.dispatch(closeModals());
				}}
				shouldCloseOnOverlayClick={true}
			>
				<h2
					style={{
						paddingTop: 2 + "%",
						marginBottom: "1rem",
						fontFamily: "Permanent Marker",
						fontSize: "2.5rem",
						paddingBottom: "3px",
						borderBottom: "1px black solid"
					}}
				>
					Login
				</h2>
				<IoIosCloseCircle
					className="close-circle"
					style={{
						position: "absolute",
						top: 3,
						right: 3,
						height: "25px",
						width: "25px"
					}}
					onClick={() => {
						props.dispatch(closeModals());
					}}
				>
					close
				</IoIosCloseCircle>

				<LoginForm />
			</Modal>
		</>
	);
}

const mapStateToProps = state => ({
	loggedIn: state.auth.loggedIn
});

export default connect(mapStateToProps)(LoginModal);
