import './Stats.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Loading from '../common/Loading';
import { fetchStats } from '../../controller/actions';

class Stats extends Component {
	componentWillMount() {
		this.props.dispatch(fetchStats());
	}

	render() {
		if (this.props.submitting)
			return (
				<div className="learnAppMain">
					<Loading className="learnApp-loading" />
				</div>
			);
		// Redirect if user not authenticated
		if (!this.props.loggedIn) return <Redirect to="/" />;

		return (
			<div className="stats__container">
				<main className="stats">
					<h1 className="stats-heading">Statistics</h1>
					<section className="stats-progress">
						<h2 className="stats-subheading">Progress</h2>
						<div className="stats-progress-bar">
							<div className="stats-progress-bar__seen" />
							<div className="stats-progress-bar__unseen" />
						</div>
						<div className="stats-progress-bar-text">
							<p>50% Seen</p>
							<p>50% Unseen</p>
						</div>
					</section>
					<section className="stats-mastery">
						<h2 className="stats-subheading">Mastery</h2>
						<div className="stats-mastery-chart">
							<div className="stats-mastery-chart-bar__container">
								<div className="stats-mastery-chart-bar stats-mastery-chart-bar__unseen">
									<p className="stats-mastery-chart-bar__percentage">40%</p>
								</div>
								<p className="stats-mastery-chart-text">New</p>
							</div>
							<div className="stats-mastery-chart-bar__container">
								<div className="stats-mastery-chart-bar stats-mastery-chart-bar__learning">
									<p className="stats-mastery-chart-bar__percentage">60%</p>
								</div>
								<p className="stats-mastery-chart-text">Learning</p>
							</div>
							<div className="stats-mastery-chart-bar__container">
								<div className="stats-mastery-chart-bar stats-mastery-chart-bar__mastered">
									<p className="stats-mastery-chart-bar__percentage">10%</p>
								</div>
								<p className="stats-mastery-chart-text">Mastered</p>
							</div>
						</div>
					</section>
					<section className="stats-fun-facts">
						<h2 className="stats-subheading">Fun Facts</h2>
						<div className="stats-fun-facts-fact">
							<p>
								<span className="stats-fun-facts-fact__title">Longest streak:</span>{' '}
								<span className="stats-fun-facts-fact__num">15</span> cards correct
							</p>
						</div>
					</section>
				</main>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	loggedIn: state.auth.loggedIn,
	submitting: state.stats.sumitting
});

export default connect(mapStateToProps)(Stats);
