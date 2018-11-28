// THIS FILE WILL CONTAIN THE LOGGED-IN APP

import React, { Component } from "react";
import { connect } from "react-redux";
import "./learnApp.scss";
import CurrentCard from "./CurrentCard";
import CurrentCardExpanded from "./CurrentCardExp";
import { expandCard } from "../../controller/actions/";

class Learn extends Component {
	showAnswerClick = () => {
		this.props.dispatch(expandCard());
	};

	render() {
		return (
			<>
				<header className="learnAppHeader">
					<div className="learnArrow" />
					<div className="learnLogo" />
					<h1>Chuck Testa</h1>
				</header>
				<div className="learnAppMain">
					{!this.props.currentCard.expanded && (
						<CurrentCard showAnswerClick={this.showAnswerClick} />
					)}
					{this.props.currentCard.expanded && <CurrentCardExpanded />}
				</div>
			</>
		);
	}
}

const mapStateToProps = state => {
	return {
		currentCard: state.learn.currentCard
	};
};

export default connect(mapStateToProps)(Learn);
