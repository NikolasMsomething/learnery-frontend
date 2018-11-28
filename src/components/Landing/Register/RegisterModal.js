// import './Register.scss';
import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { closeModals } from '../../../controller/actions';
import RegisterForm from './RegisterForm';

class RegisterModal extends Component {
	render() {
		Modal.setAppElement('main');
		return (
			<div>
				<Modal
					isOpen={true}
					style={customStyles}
					contentLabel="Example Modal"
					onRequestClose={() => {
						this.props.dispatch(closeModals());
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
						Register
					</h2>

					<RegisterForm />
					<button
						style={{ position: 'absolute', top: 3, right: 3 }}
						onClick={() => {
							this.props.dispatch(closeModals());
						}}
					>
						close
					</button>
				</Modal>
			</div>
		);
	}
}

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

export default connect()(RegisterModal);