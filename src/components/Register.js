import React from "react";
import { connect } from "react-redux";
import { testAction } from "../actions/index";

function Register(props) {
	return (
		<div>
			<p>Test</p>
			<img src={require("../pictures/Learnery_Logo.png")} alt="" />
			{/* always remember to require the image when importing */}
			<button
				onClick={e => {
					props.dispatch(testAction("Test"));
				}}
			/>
		</div>
	);
}

const mapStateToProps = state => {
	return {
		name: state.login.name
	};
};
export default connect(mapStateToProps)(Register);
