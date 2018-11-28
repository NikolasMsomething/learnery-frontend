import React from "react";
import { connect } from "react-redux";
import "./CurrentCardExp.scss";
import { FaArrowDown, FaArrowLeft } from "react-icons/fa";
function CurrentCardExpanded(props) {
	return (
		<>
			<div className="cardContainer">
				<div className="expQuestionContainer">
					<h1>{props.currentCard.question}</h1>
				</div>
				<div className="answerContainer">
					<h1>{props.currentCard.answer}</h1>
				</div>
				<div className="answerBtnContainer">
					<button>Yikes</button>
					<button>Got it</button>
				</div>
			</div>
		</>
	);
}

const mapStateToProps = state => {
	console.log(state);
	return { currentCard: state.learn.currentCard };
};

export default connect(mapStateToProps)(CurrentCardExpanded);
