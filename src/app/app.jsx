//this is ES6 syntax, it's essentially equivalent to: var React = require('react')
import React from 'react';

//This is also ES6 syntax, it's similar to module.exports = React.createClass({});
//whatever is `exported` from this file will be available for other files to import (like we did with react above)
export default class App extends React.Component{
	render(){
		return <h1>Hello World!</h1>;
	}
}