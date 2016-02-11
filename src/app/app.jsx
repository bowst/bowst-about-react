//this is ES6 syntax, it's essentially equivalent to: var React = require('react')
import React from 'react';

//Bring in our other components
import EditNote from "./../components/EditNote.jsx";

//This is also ES6 syntax, it's similar to module.exports = React.createClass({});
//whatever is `exported` from this file will be available for other files to import (like we did with react above)
export default class App extends React.Component{
	render(){
		return (
			<div>
				{/*
					Since JSX is basically XML, all components can only consist of a single node.
					That's why I've wrapped everything in a div
				*/}
				<h1>Bowst About React - Notetaking App</h1>
				<EditNote />
			</div>
		);
	}
}