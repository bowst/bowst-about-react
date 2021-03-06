//this is ES6 syntax, it's essentially equivalent to: var React = require('react')
import React from 'react';

//This is also ES6 syntax, it's similar to module.exports = React.createClass({});
//whatever is `exported` from this file will be available for other files to import (like we did with react above)
export default class EditNote extends React.Component{

	//ES6 makes JS class more inline with real object-oriented programming
	//this constructor method is called when an instance object is initialized
	//we'll cover the 'props' argument later
	constructor(props) {
		//we are extending or 'inheriting' another class here
		//we call the special 'super' method, which will call the constructor in the class we are inheriting from
		//in this case, it will call the constructor on the React Component object
		super(props);

		//Set the initial state of this component
		//the note property will hold the text of our note
		this.state = {
			note: ""
		};
	}

	//RECOMMENDED - define the properties that this component uses. See: https://facebook.github.io/react/docs/reusable-components.html
	//this will help other developers interacting with your component understand who it should be used
	static propTypes = {
		addNote: React.PropTypes.func
	};

	//this method (explained below) updates the state everytime the input is changed
	_handleChange(event){
		this.setState({
			note: event.target.value
		});
	}

	_clearInput(){
		/*
			Since we're now controlling the value of the textfield with the state,
			clearing the textfield becomes trivial.  We just set this.state.note to an empty string.
		*/
		this.setState({
			note: ""
		});
	}

	_addNote(){
		/*
			In this method, we're call another method passed in via the props.  Checkout app.jsx to see how this is done.
			This component doesn't care what "adding a note" means, it just tells it's parent component to do it when the button is clicked.
		*/
		this.props.addNote(this.state.note);

		//Here we use the same method to clean out the note and get ready for the next one
		this._clearInput();
	}

	render(){
		return (
			<div>
				{/*
					This is what is called a 'controlled' form input in React. Here's how it works:
					1) When the component is mounted, the value of the text area is set to this.state.note  
				       Recall that in the constructor() method, we just set this.state.note to an empty string

				    2) Each time the user enters input, it runs the method passed as the 'onChange' property and passes a synthetic DOM event (https://facebook.github.io/react/docs/events.html)

				    3) The change handler updates the state, setting this.state.note to value the user just entered

				    4) The component is re-rendered by exectuting the render function and updating the DOM with the new value

				*/}
				<textarea
					value={this.state.note}
					onChange={this._handleChange.bind(this)} />

				{/*
					Notice how we pass bound methods for the 'onClick' and 'onChange' properties.  
					We bind them to the 'this' keyword so `this` in the method is the component.
				*/}

				<button
					onClick={this._clearInput.bind(this)}>
					Clear Note
				</button>

				{/*
					We added this button to add the note.  It call the _addNote method defined above when clicked.
				*/}
				<button
					onClick={this._addNote.bind(this)}>
					Add Note
				</button>
			</div>
		);
	}
}