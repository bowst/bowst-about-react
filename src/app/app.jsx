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

//This is also ES6 syntax, it's similar to module.exports = React.createClass({});
//whatever is `exported` from this file will be available for other files to import (like we did with react above)
export default class App extends React.Component{
	render(){
		return (
			<div className="container">
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