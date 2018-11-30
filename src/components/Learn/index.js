import './Learn.scss';
import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
// Redux
import { connect } from 'react-redux';
// Components
import Loading from '../common/Loading';
import Card from './Card';
import Stats from './Stats';
// Assets
import { MdExpandMore } from 'react-icons/md';
import { FaPowerOff, FaRegChartBar } from 'react-icons/fa';
import Logo from '../../assets/Logo.png';

class Learn extends Component {
	state = {
		expandedUserInfo: false
	};

	toggleUserInfoExpand = () => {
		this.setState(
			{
				expandedUserInfo: !this.state.expandedUserInfo
			},
			() => {
				if (this.state.expandedUserInfo) {
					this.logOut.focus();
					console.log(this.logOut);
				}
			}
		);
	};

	render() {
		// Render loading spinner while submitting
		if (this.props.submitting)
			return (
				<div className="learnAppMain">
					<Loading className="learnApp-loading" />
				</div>
			);
		// Redirect if user not authenticated
		if (!this.props.loggedIn) return <Redirect to="/" />;

		return (
			<>
				<header className="learnAppHeader">
					<FaRegChartBar className="learnArrow" alt="" />
					<img src={Logo} className="learnLogo" alt="" />
					{/* Make this a button with no default styling, with the username and icon */}
					<div onClick={this.toggleUserInfoExpand} className="userBox">
						<h1>{this.props.user.username}</h1>
						<MdExpandMore className="expandMore" />
					</div>
				</header>
				<div
					ref={element => (this.logOut = element)}
					className={this.state.expandedUserInfo ? 'expanded-on' : 'expanded-off'}
				>
					<h1>LOGOUT?</h1>
					<FaPowerOff className="powerOff" />
				</div>
				<div className="learnAppMain">
					<Route exact path="/learn" component={Card} />
					<Route exact path="/learn/stats" component={Stats} />
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
