import React from 'react'
//this syntax is called destructuring.  This is assigns the variable render to the property with the same name exported by the react-dom package
import { render } from 'react-dom'

//import our first react component
//Note that because this is a relative path (and not a node_module), we start our path with `./`
//This assigns the variable App in this file to whatever was exported in the file whose path we're referencing
import App from './app/app.jsx';

//Here's where we use the render method we imported from the react-dom package to inject our component into the DOM
//we use the plain JS method document.getElementById() to use the div in our index.html file as our mount point
render(<App />, document.getElementById("app"));