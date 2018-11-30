import './Loading.scss';
import React from 'react';

export default function Loading({ className }) {
	return (
		<div className={className ? className : null}>
			<div className={'lds-ripple'}>
				<div />
				<div />
			</div>
		</div>
	);
}
