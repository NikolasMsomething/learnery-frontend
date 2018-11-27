import './Login.scss';
import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { closeModals } from '../../controller/actions';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column',
		height: '538px',
		padding: 1 + '%',
		width: 100 + '%',
		maxWidth: '400px',
		justifyContent: 'center',
		backgroundColor: 'var(--lnGold)',
		border: 'solid 3px black',
		overlay: {
			backgroundColor: 'blue'
		}
	}
};

function LoginModal(props) {
	Modal.setAppElement('main');
	return (
		<div>
			<Modal
				isOpen={true}
				style={customStyles}
				contentLabel="Example Modal"
				onRequestClose={() => {
					props.dispatch(closeModals());
				}}
				shouldCloseOnOverlayClick={true}
			>
				<h2
					style={{
						paddingTop: 2 + '%',
						marginBottom: '3rem',
						fontFamily: 'Permanent Marker',
						fontSize: '2.5rem',
						paddingBottom: '3px',
						borderBottom: '1px black solid'
					}}
				>
					Login
				</h2>
				<button
					style={{ position: 'absolute', top: 3, right: 3 }}
					onClick={() => {
						props.dispatch(closeModals());
					}}
				>
					close
				</button>

				<form
					onSubmit={e => {
						e.preventDefault();
						console.log(e.currentTarget.username.value, e.currentTarget.password.value);
					}}
					className="loginModalForm"
				>
					<label forHtml="username">Username</label>
					<input type="text" name="username" />
					<label forHtml="username">Password</label>
					<input type="password" name="password" />
					<input type="submit" />
				</form>
			</Modal>
		</div>
	);
}

export default connect()(LoginModal);
