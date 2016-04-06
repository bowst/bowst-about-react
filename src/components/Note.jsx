import React from 'react';

export default class Note extends React.Component{
	//RECOMMENDED - define the properties that this component uses. See: https://facebook.github.io/react/docs/reusable-components.html
	//this will help other developers interacting with your component understand who it should be used
	static propTypes = {
		note: React.PropTypes.string
	};

	//This component is only reponsible for rendering the note
	render(){
		return (
			<div>
				{/*
					Here's where we actually render the text of the note onto the page
					SYNTAX NOTE - inside of JSX markup, anything between curly braces is run as plain old javascript
				*/}
				{this.props.note}
				<hr/>
			</div>
		);
	}
}