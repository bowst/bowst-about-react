#Bowst about React

This repository is intended to provide a start-to-finish walkthrough of a building a ReactJS application, with a goal of explaining not just what to do, but the **why** and **how** as well.

Each branch in the repo represents a stage of the set up.  Without further ceremony, let's jump right in!

##Walkthrough

###Step 1 - Initialization
1. Create a new folder with the name of your project (or initialize an empty repo on github and clone it)
2. Run `npm init`, which will walk you though the command line wizard to create a [package.json](https://docs.npmjs.com/files/package.json) file
3. Run `npm install --save react react-dom` => installs the [React](https://facebook.github.io/react/) and [ReactDOM](https://facebook.github.io/react/docs/top-level-api.html#reactdom) packages.  Since version 0.14, the react library has been totally decoupled from the browser.  It can currently be used to develop native mobile applications and also be rendered on the server. Thus, `react-dom` is necessary to mount your react code in the browser.
4. While react components can be written in standard javascript, it is much easier to develop them in a specialized file format called [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html).  This format mixes markup-like XML and javascript to create self-contained, self-documenting, and reusable components.  However, much like SASS, it must be compiled by a build process to create the raw JS which can be executed by the browser.  Let's start by creating the `src` and `dist` folders for our JSX and compiled code, respectively.
5. In the `dist` folder, where we'll put our compiled code, let's add an `index.html` file which will wrap our app.







