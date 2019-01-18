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

  /*
	stats: {
      streak: 3,
      lastSeen: '2018-11-25T15:58:57.676Z',
      maxStreak: 3,
      timesSeen: 4,
      timesCorrect: 3,
      timesIncorrect: 1
    }
	*/
  processCardStats = () => {
    return this.props.cardStats.reduce(
      (acc, item) => {
        const {
          timesSeen,
          timesCorrect,
          timesIncorrect,
          maxStreak,
        } = item.stats;
        // Case: unseen
        if (timesSeen === 0) {
          acc.unseen++;
          return acc;
        }
        acc.seen++;
        // Case: mastered
        if (
          timesCorrect / (timesCorrect + timesIncorrect) >= 0.8 &&
          timesSeen >= 5 &&
          maxStreak >= 3
        ) {
          acc.mastered++;
          return acc;
        }
        // Case: learning
        acc.learning++;
        return acc;
      },
      { seen: 0, unseen: 0, learning: 0, mastered: 0 }
    );
  };

  render() {
    if (this.props.submitting) {
      return (
        <div className="learnAppMain">
          <Loading className="learnApp-loading" />
        </div>
      );
    }
    // Redirect if user not authenticated
    if (!this.props.loggedIn) return <Redirect to="/" />;

    const { cardsAnswered, maxStreak, streak } = this.props.userStats;
    const { seen, unseen, learning, mastered } = this.processCardStats();

    const percentSeen = seen / (seen + unseen) * 100;
    const percentUnseen = unseen / (seen + unseen) * 100;
    const percentMastered = mastered / (seen + unseen) * 100;
    const percentLearning = learning / (seen + unseen) * 100;

    return (
      <div className="stats__container">
        <main className="stats">
          <h1 className="stats-heading">Statistics</h1>
          <section className="stats-progress">
            <h2 className="stats-subheading">Progress</h2>
            <div className="stats-progress-bar">
              <div
                className="stats-progress-bar__seen"
                style={{ width: (percentSeen > 5 ? percentSeen : 5) + '%' }}
              />
              <div
                className="stats-progress-bar__unseen"
                style={{ width: (percentUnseen > 5 ? percentUnseen : 5) + '%' }}
              />
            </div>
            <div className="stats-progress-bar-text">
              <p>{percentSeen}% Seen</p>
              <p>{percentUnseen}% Unseen</p>
            </div>
          </section>
          <section className="stats-mastery">
            <h2 className="stats-subheading">Mastery</h2>
            <div className="stats-mastery-chart">
              <div className="stats-mastery-chart-bar__container">
                <div
                  style={{
                    width: (percentUnseen > 15 ? percentUnseen : 15) + '%',
                  }}
                  className="stats-mastery-chart-bar stats-mastery-chart-bar__unseen"
                >
                  <p className="stats-mastery-chart-bar__percentage">
                    {percentUnseen}%
                  </p>
                </div>
                <p className="stats-mastery-chart-text">New</p>
              </div>
              <div
                style={{
                  width: (percentLearning > 15 ? percentLearning : 15) + '%',
                }}
                className="stats-mastery-chart-bar__container"
              >
                <div className="stats-mastery-chart-bar stats-mastery-chart-bar__learning">
                  <p className="stats-mastery-chart-bar__percentage">
                    {percentLearning}%
                  </p>
                </div>
                <p className="stats-mastery-chart-text">Learning</p>
              </div>
              <div className="stats-mastery-chart-bar__container">
                <div
                  className="stats-mastery-chart-bar stats-mastery-chart-bar__mastered"
                  style={{
                    width: (percentMastered > 15 ? percentMastered : 15) + '%',
                  }}
                >
                  <p className="stats-mastery-chart-bar__percentage">
                    {percentMastered}%
                  </p>
                </div>
                <p className="stats-mastery-chart-text">Mastered</p>
              </div>
            </div>
          </section>
          {/* <section className="stats-fun-facts">
            <h2 className="stats-subheading">Fun Facts</h2>
            <div className="stats-fun-facts-fact">
              <p>
                <span className="stats-fun-facts-fact__title">
                  Total cards answered:
                </span>{' '}
                <span className="stats-fun-facts-fact__num">
                  {cardsAnswered}
                </span>{' '}
                cards
              </p>
            </div>
            <div className="stats-fun-facts-fact">
              <p>
                <span className="stats-fun-facts-fact__title">
                  Longest correct streak:
                </span>{' '}
                <span className="stats-fun-facts-fact__num">
                  {maxStreak}
                </span>{' '}
                cards correct
              </p>
            </div>
            <div className="stats-fun-facts-fact">
              <p>
                <span className="stats-fun-facts-fact__title">
                  Current correct streak:
                </span>{' '}
                <span className="stats-fun-facts-fact__num">{streak}</span>{' '}
                cards correct
              </p>
            </div>
          </section> */}
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.auth.loggedIn,
  submitting: state.stats.submitting,
  userStats: state.stats.userStats,
  cardStats: state.stats.cardStats,
});

export default connect(mapStateToProps)(Stats);
