#Bowst about React

This repository is intended to provide a start-to-finish walkthrough of a building a ReactJS application, with a goal of explaining not just what to do, but the **why** and **how** as well.

Each branch in the repo represents a stage of the set up.  Without further ceremony, let's jump right in!

##Walkthrough

###Step 1 - Initialization

1. Create a new folder with the name of your project (or initialize an empty repo on github and clone it)
2. Run `npm init`, which will walk you though the command line wizard to create a [package.json](https://docs.npmjs.com/files/package.json) file
3. Run `npm install --save react react-dom` => installs the [React](https://facebook.github.io/react/) and [ReactDOM](https://facebook.github.io/react/docs/top-level-api.html#reactdom) packages.  Since version 0.14, the react library has been totally decoupled from the browser.  It can currently be used to develop native mobile applications and also be rendered on the server. Thus, `react-dom` is necessary to mount your react code in the browser.
4. While react components can be written in standard javascript, it is much easier to develop them in a specialized file format called [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html).  This format mixes markup-like XML and javascript to create self-contained, self-documenting, and reusable components.  However, much like SASS, it must be compiled by a build process to create the raw JS which can be executed by the browser.  Let's start by creating the `src` and `dist` folders for our JSX and compiled code, respectively.
5. In the `dist` folder, where we'll eventually put our compiled code, let's add an `index.html` file which will wrap our app.

##Step 2 - Hello, World

1. Let's create our first react component!  Inside the `src/` directory, let's add an `app` folder.  Inside that folder, let's add an `app.jsx` file, which will be the entry point for our app.  In this file, we'll create our component by creating a new class which extends the React.Component class.
2. Now we need to inject our component into the DOM in the browser.  This is where the `react-dom` package will be used.  Create a file in `./src/` called `mount.jsx`, and take a look at the code to link the DOM with our react component.







