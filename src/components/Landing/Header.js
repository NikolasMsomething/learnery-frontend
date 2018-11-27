import './Header.scss';
import React from 'react';
import { AwesomeButton } from 'react-awesome-button';
import { connect } from 'react-redux';
import { openLoginModal } from '../../controller/actions';

/* eslint-disable-next-line */
const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)'
	}
};

function Header(props) {
	let rightSideComp = (
		<AwesomeButton
			action={e => {
				props.dispatch(openLoginModal());
			}}
			className="headerBarBtn"
		>
			Login
		</AwesomeButton>
	);

	if (props.authToken) {
		rightSideComp = props.username;
	}

	return (
		<>
			<header className="headerBar">
				<img src={require('../../assets/GitHub-Mark-64px.png')} alt="" />
				{rightSideComp}
			</header>
		</>
	);
}

const mapStateToProps = state => {
	return {
		// authToken: state.login.authToken,
		// username: state.login.username
	};
};

export default connect(mapStateToProps)(Header);
