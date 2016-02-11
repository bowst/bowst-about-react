//this is ES6 syntax, it's essentially equivalent to: var React = require('react')
import React from 'react';

/*
Bring in our styles.  Because we've set up the common folder as a module directory in our webpack configuration,
we can reference code in that folder as if it were in node_modules.  That is, we don't need the relative path (i.e. the './' in front of the path)
to the code because webpack will automatically search both the node_modules and common directories for paths that match our request
*/
import styles from "styles/main.scss";

//Bring in our other components
import EditNote from "./../components/EditNote.jsx";

//bring in the component we created to render each note
import Note from "./../components/Note.jsx";

//This is also ES6 syntax, it's similar to module.exports = React.createClass({});
//whatever is `exported` from this file will be available for other files to import (like we did with react above)
export default class App extends React.Component{

	//since this component controls the list of notes,
	//let's set up the default state (notes as an empty array) in the constructor() method
	constructor(props) {
		super(props);

		this.state = {
			notes: []
		};
	}

	/*
		This is the method that is passed to the EditNote component,
		basically providing an interface for manipulating this components state
	*/
	_addNote(note){
		/*
			This method takes the note we want to add and creates a new list using the concat function.
			In other words, if you checked newList === this.state.notes, you'd get FALSE.
			This is different from using this.state.notes.push(note), because this would simply add the note 
			to the end of the existing array (the reference comparison would yield TRUE).

			This is called Immutability, and setting it up in this way will allow us to easily implement some performance 
			enhancements later if the need arises.  Making your state immutable is not required but is highly recommended, 
			as it makes your applications data flow less obscure. 
		*/
		var newList = this.state.notes.concat(note);

		//again, calling this.setState will update the state and trigger re-rendering of the component
		this.setState({
			notes: newList
		});
	}

	render(){
		return (
			<div className="container">
				{/*
					Since JSX is basically XML, all components can only consist of a single node.
					That's why I've wrapped everything in a div
				*/}
				<h1>Bowst About React - Notetaking App</h1>
				{/*
					Here we added the add note property to our EditNote component
					This function will be available inside the component using: this.props.addNode()
				*/}
				<EditNote addNote={this._addNote.bind(this)}/>
				<br />
				<br />
				<div>
				{/*
					Here we use the standard javascript map method to create a new Note object for each 
					note in our state data.
				*/}
				{
					this.state.notes.map(function(note, index){
						/*
							See that key prop?  That's a special prop that React uses for tracking when 
							you generate nodes from an array.  I'm just using the index for now but in real applications
							it's generally better to use an id or something that is intrinsically tied to the data
						*/
						return <Note note={note} key={index} />
					})
				}
				</div>
			</div>
		);
	}
}