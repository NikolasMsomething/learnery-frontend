import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CurrentCardExp.scss';
import { handleAnswerSubmit } from '../../controller/actions';
class CurrentCardExpanded extends Component {
	// state = {
	// 	Yikes: "Yikes",
	// 	"Got it": "Got it"
	// }
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
		return (
			<>
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
			</>
		);
	}
}

const mapStateToProps = state => ({ currentCard: state.learn.currentCard });

export default connect(mapStateToProps)(CurrentCardExpanded);
