// THIS FILE WILL CONTAIN THE LOGGED-IN APP

import React, { Component } from "react";
import { connect } from "react-redux";
import "./learnApp.scss";
import { MdExpandMore } from "react-icons/md";
import { FaPowerOff } from "react-icons/fa";
import Logo from "../../assets/Logo.png";
import gLogo from "../../assets/GitHub-Mark-64px.png";
import CurrentCard from "./CurrentCard";
import CurrentCardExpanded from "./CurrentCardExp";
import { toggleExpandCard, handleNext } from "../../controller/actions/";
import { Redirect } from "react-router-dom";
class Learn extends Component {
	state = {
		expandedUserInfo: false
	};

	toggleUserInfoExpand = () => {
		this.setState({
			expandedUserInfo: !this.state.expandedUserInfo
		});
	};

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
		let expandedUserInfo = "expanded-off";

		if (this.state.expandedUserInfo) {
			expandedUserInfo = "expanded-on";
		}
		return (
			<>
				{!this.props.submitting && !this.props.loggedIn && <Redirect to="/" />}
				<header className="learnAppHeader">
					<a href="https://github.com/NikolasMsomething/learnery-frontend">
						<img src={gLogo} className="learnArrow" />
					</a>
					<img src={Logo} className="learnLogo" alt="" />
					<div className="userBox">
						<h1>{username}</h1>
						<MdExpandMore
							onClick={this.toggleUserInfoExpand}
							className="expandMore"
						/>
					</div>
				</header>

				<div className="learnAppMain">
					<div className={expandedUserInfo}>
						<h1>LOGOUT?</h1>

						<FaPowerOff className="powerOff" />
					</div>
					{!this.props.currentCard.expanded && (
						<CurrentCard showAnswerClick={this.showAnswerClick} />
					)}
					{this.props.currentCard.expanded && <CurrentCardExpanded />}
				</div>
			</>
		);
	}
}

const mapStateToProps = state => ({
	currentCard: state.learn.currentCard,
	user: state.auth.user,
	loggedIn: state.auth.loggedIn,
	submitting: state.auth.submitting
});

export default connect(mapStateToProps)(Learn);
