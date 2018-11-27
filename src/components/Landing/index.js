// Styles
import './Landing.scss';
import './Modals.scss';
// Modules
import React, { Component } from 'react';
// Redux
import { connect } from 'react-redux';
import { openRegisterModal, openLoginModal } from '../../controller/actions';
// Components
// import Footer from "../Footer";
import LoginModal from './Login/LoginModal';
import RegisterModal from './Register/RegisterModal';
// Assets
const learneryLogo = require('../../assets/Learnery_Logo.png');

class Landing extends Component {
	openRegisterModal = () => this.props.dispatch(openRegisterModal());
	openLoginModal = () => this.props.dispatch(openLoginModal());

	render() {
		const { showLoginModal, showRegisterModal } = this.props;
		return (
			<main className="App">
				<header className="headerBar">
					<img src={require('../../assets/GitHub-Mark-64px.png')} alt="" />
					{/* TODO: Add state to manage being logged in */}
					<button onClick={this.openLoginModal}>Login</button>
				</header>
				{showLoginModal && <LoginModal />}
				{showRegisterModal && <RegisterModal />}
				<section className="registerSection">
					<img className="learneryLogo" src={learneryLogo} alt="" />
					<p className="registerFirstP">
						Will you pass your software <br /> engineering interviews?
					</p>
					<p className="registerSecondP">
						Get ahead of the pack by practicing programming trivia on Learnery!{' '}
					</p>
					{/* TODO: Add state to manage being logged in */}
					<button onClick={this.openRegisterModal}>Get Started</button>
				</section>
				{/* <Footer /> */}
			</main>
		);
	}
}

const mapStateToProps = state => ({
	showLoginModal: state.landing.showLoginModal,
	showRegisterModal: state.landing.showRegisterModal
});

export default connect(mapStateToProps)(Landing);
