import React from 'react';
import './box.css';

function Box(props) {
	return (
		<div className={'box'}>
			{props.title ? <h3 className={'box-header'}>{props.title}</h3> : null}
			<div className={'box-body'}>
				{props.children}
			</div>
		</div>
	)
}
export default Box;
