// import './Register.scss';
import React, { Component } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { closeModals } from "../../../controller/actions";
import RegisterForm from "./RegisterForm";
import { IoIosCloseCircle } from "react-icons/io";

class RegisterModal extends Component {
	render() {
		Modal.setAppElement("main");
		return (
			<div>
				{this.props.loggedIn && <Redirect to="/learn" />}
				<Modal
					isOpen={true}
					style={customStyles}
					contentLabel="Example Modal"
					onRequestClose={() => {
						this.props.dispatch(closeModals());
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

					<RegisterForm />
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
							this.props.dispatch(closeModals());
						}}
					>
						close
					</IoIosCloseCircle>
				</Modal>
			</div>
		);
	}
}

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

const mapStateToProps = state => ({
	loggedIn: state.auth.loggedIn
});

export default connect(mapStateToProps)(RegisterModal);
