import React from "react";
import { connect } from "react-redux";
import "./CurrentCard.scss";
import { FaArrowDown, FaArrowLeft } from "react-icons/fa";
function CurrentCard(props) {
	return (
		<>
			<div onClick={props.showAnswerClick} className="cardContainer">
				<div className="questionContainer">
					<h1>{props.currentCard.question}</h1>
				</div>
				<div className="expandBtnContainer">
					<h2>(click or press space to continue)</h2>
					<FaArrowDown className="arrowDown" />
				</div>
			</div>
		</>
	);
}

const mapStateToProps = state => {
	console.log(state);
	return { currentCard: state.learn.currentCard };
};

export default connect(mapStateToProps)(CurrentCard);
