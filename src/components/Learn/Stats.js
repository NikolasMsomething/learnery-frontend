import React, { Component } from "react";
import "./Stats.scss";
import { connect } from "react-redux";

export class Stats extends Component {
	render() {
		console.log(this.props.location.pathname);
		return (
			<div className="statsMain">
				<div className="progress">
					<h2>Progress</h2>

					<div className="outer">
						<div className="progress-progress-bar" />
						<div className="progress-unprogress-bar" />
					</div>
					<div className="progress-bar-words">
						<p>Seen</p>
						<p>Unseen</p>
					</div>
				</div>
				<div className="mastery">
					<h2>Mastery</h2>
					<div className="learning-progress-bar" />
					<p>Learning</p>
					<div className="mastered-progress-bar" />
					<p>Mastered</p>
				</div>
				<div className="fun-facts">
					<h2>Fun Facts</h2>
					<p>Longest Streak: {} correct</p>
					<p>Average Answer Speed: {} sec</p>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Stats);
