import './Card.scss';
import React, { Component } from 'react';
// Redux
import { connect } from 'react-redux';
import { toggleExpandCard, handleNext, handleAnswerSubmit } from '../../controller/actions/';
// Assets
import { FaArrowDown } from 'react-icons/fa';

class Card extends Component {
	showAnswerClick = () => {
		this.props.dispatch(toggleExpandCard());
	};

	componentDidMount() {
		if (!this.props.currentCard.question) {
			this.props.dispatch(handleNext());
		}
	}

	sendAnswerYikes = () => {
		this.props.dispatch(
			handleAnswerSubmit({
				confidence: '0'
			})
		);
	};
	sendAnswerGotIt = () => {
		this.props.dispatch(
			handleAnswerSubmit({
				confidence: '1'
			})
		);
	};

	render() {
		if (!this.props.currentCard.expanded) {
			return (
				<div onClick={this.showAnswerClick} className="cardContainer">
					<div className="questionContainer">
						<h1>{this.props.currentCard.question}</h1>
					</div>
					<div className="expandBtnContainer">
						<h2>(click or press space to continue)</h2>
						<FaArrowDown className="arrowDown" />
					</div>
				</div>
			);
		} else {
			return (
				<div className="cardContainer">
					<div className="expQuestionContainer">
						<h1>{this.props.currentCard.question}</h1>
					</div>
					<div className="answerContainer">
						<h1>{this.props.currentCard.answer}</h1>
					</div>
					<div className="answerBtnContainer">
						<button onClick={this.sendAnswerYikes}>Yikes</button>
						<button onClick={this.sendAnswerGotIt}>Got it</button>
					</div>
				</div>
			);
		}
	}
}

const mapStateToProps = state => ({
	currentCard: state.learn.currentCard,
	user: state.auth.user,
	loggedIn: state.auth.loggedIn,
	submitting: state.auth.submitting
});

export default connect(mapStateToProps)(Card);
