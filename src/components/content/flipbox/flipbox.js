import React from 'react';
import './flipbox.css';

class CardFront extends React.Component {
	render() {
		return(
			<div className='card-side side-front'>
				{this.props.children}
			</div>
		)
	}
}

class CardBack extends React.Component {
	render() {
		return(
			<div className='card-side side-back'>
				{this.props.children}
			</div>
		)
	}
}

// React component for the card (main component)
class Flipbox extends React.Component {
	render() {
		return(
			<div className='card-container'>
				<div className='card-body'>
					<CardBack>{this.props.backSide}</CardBack>

					<CardFront>{this.props.frontSide}</CardFront>
				</div>
			</div>
		)
	}
}
export default Flipbox;
