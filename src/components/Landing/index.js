// Styles
import "./Landing.scss";
import "./Modals.scss";
// Modules
import React, { Component } from "react";
// Redux
import { connect } from "react-redux";
import { openRegisterModal, openLoginModal } from "../../controller/actions";
// Components
// import Footer from "../Footer";
import LoginModal from "./Login/LoginModal";
import RegisterModal from "./Register/RegisterModal";
// Assets
const LearneryHero = require("../../assets/Learnery_Logo.png");
const GithubIcon = require("../../assets/GitHub-Mark-64px.png");

class Landing extends Component {
	openRegisterModal = () => this.props.dispatch(openRegisterModal());
	openLoginModal = () => this.props.dispatch(openLoginModal());

	render() {
		const { showLoginModal, showRegisterModal } = this.props;
		return (
			<main className="App">
				<header className="headerBar">
					<a
						rel="noopener noreferrer"
						target="_blank"
						href="https://github.com/NikolasMsomething/learnery-frontend"
					>
						<img alt="" src={GithubIcon} className="learnArrow" />
					</a>
					{/* TODO: Add state to manage being logged in */}
					<button className="yellow-button" onClick={this.openLoginModal}>
						<p>Login</p>
					</button>
				</header>
				{showLoginModal && <LoginModal />}
				{showRegisterModal && <RegisterModal />}
				<section className="registerSection">
					<img className="LearneryHero" src={LearneryHero} alt="" />
					<p className="registerFirstP">
						Will you pass your software <br /> engineering interviews?
					</p>
					<p className="registerSecondP">
						Get ahead of the pack by practicing programming trivia on Learnery!{" "}
					</p>
					{/* TODO: Add state to manage being logged in */}

					<button className="green-button" onClick={this.openRegisterModal}>
						<p>Get Started!</p>
					</button>
				</section>
				{/* <Footer /> */}
			</main>
		);
	}
}

const mapStateToProps = state => ({
	showLoginModal: state.landing.showLoginModal,
	showRegisterModal: state.landing.showRegisterModal,
	loggedIn: state.auth.loggedIn
});

export default connect(mapStateToProps)(Landing);
