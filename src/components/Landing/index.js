import './Landing.scss';
import React, { Component } from 'react';
import Header from './Header.js';
// import Footer from "../Footer";
// import Modal from '../Modal';
import { connect } from 'react-redux';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import { openRegisterModal, openLoginModal, closeModals } from '../../controller/actions';
const learneryLogo = require('../../assets/Learnery_Logo.png');

class Landing extends Component {
	closeModals = () => this.props.dispatch(closeModals());

	openRegisterModal = () => this.props.dispatch(openRegisterModal());

	openLoginModal = () => this.props.dispatch(openLoginModal());

	render() {
		const { showLoginModal, showRegisterModal } = this.props;
		return (
			<main className="App">
				<Header />
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
