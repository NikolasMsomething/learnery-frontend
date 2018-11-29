// THIS FILE WILL CONTAIN THE LOGGED-IN APP

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './learnApp.scss';
import Logo from '../../assets/Logo.png';
import gLogo from '../../assets/GitHub-Mark-64px.png';
import CurrentCard from './CurrentCard';
import CurrentCardExpanded from './CurrentCardExp';
import { toggleExpandCard, handleNext } from '../../controller/actions/';
import { Redirect } from 'react-router-dom';
class Learn extends Component {
	showAnswerClick = () => {
		this.props.dispatch(toggleExpandCard());
	};

	componentDidMount() {
		if (!this.props.currentCard.question) {
			this.props.dispatch(handleNext());
		}
	}

	render() {
		let username = this.props.user && this.props.user.username;

		return (
			<>
				{!this.props.loggedIn && <Redirect to="/" />}
				<header className="learnAppHeader">
					<img src={gLogo} className="learnArrow" alt="" />
					<img src={Logo} className="learnLogo" alt="" />
					<h1>{username}</h1>
				</header>
				<div className="learnAppMain">
					{!this.props.currentCard.expanded && <CurrentCard showAnswerClick={this.showAnswerClick} />}
					{this.props.currentCard.expanded && <CurrentCardExpanded />}
				</div>
			</>
		);
	}
}

const mapStateToProps = state => ({
	currentCard: state.learn.currentCard,
	user: state.auth.user,
	loggedIn: state.auth.loggedIn
});

export default connect(mapStateToProps)(Learn);
