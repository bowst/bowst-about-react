#Bowst about React

This repository is intended to provide a start-to-finish walkthrough of a building a ReactJS application, with a goal of explaining not just what to do, but the **why** and **how** as well. For this tutorial, we'll be creating a simple note taking app.  Please note that a lot of the setup for this project is not ReactJS specific, but is very similar to modern Angular, Ionic, and other leading web technologies.

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
3. As we discussed in Step 1.4, we need a way to compile our JSX code into plain old javascript.  At time of this writing, [Webpack](https://webpack.github.io/docs/) was quickly emerging as the standard for compiling and bundling front-end code.  By using file format specific 'loaders', which are pulled down as seperate packages, webpack can bundle a number of different file formats, including JSX, SASS, LESS, CoffeeScript, etc.  Let's install it using, you guessed it, the following command: `npm install --save-dev webpack`
4. Next we're going to need some webpack loaders to compile our JSX file.  We here at Bowst like to use Babel, which will translate our JSX into plain old javascript.  As a bonus, it will also compile our ES6 syntax into plain old javascript as well!  Babel is quite modular, and thus requires several node packages.  Install them using the following command: `npm install --save-dev babel-core babel-loader babel-preset-react babel-preset-es2015 babel-preset-stage-0`
5. Ok, now we've got everything we need to compile our JSX file - we just need to configure webpack how to do it.  This is accomplished by creating a `webpack.config.js` file in the root directory of our project, which essentially just exports our JSON configuration.
6. Lastly, let's create a command in our package.json file to run the build.  In the "scripts" section, add a "build-dev" key, with a value of our build command, which just so happens to be `webpack --config webpack.config.dev.js`, which just runs webpack and passes it our configuration.  We can run this from the command line by using the following command: `npm run build-dev`.  It's helpful to create this shortcut because it allows running commands using node packages in your project folder without having to install them globally.  For example, even though webpack is not in your `$PATH`, running the command through npm will make any executables available in the `node_modules/.bin` folder.
7. Run that command (`npm run build-dev`), and notice you get an `app.bundle.js` file in the `/dist` folder!  Huzzah. Now all we need to do is reference this file from our index.html file.  Then open the html file in your browser to say HELLO to the world.

##Step 3 - Interacting with our App

1. One of the real strengths of React is it allows you to build highly interactive user experiences.  Let's grab ourselves a slice of that!  Let's add in a textarea where we'll actually type out our notes and a button to clear the textarea.  Because React is all about building modularly, we'll create a `./src/components` directory and add it here as a new component called `EditNote`.  Checkout the commit, run `npm run build-dev`, and refresh the site in the browser. Congratulations, your app is interactive!  You'll notice we introduced the concept of state in this component - check out the [Key Concepts](#key-concepts) section below to get more information on this important concept.


##Key Concepts

###Props and State

Most React components have two critical properties, `props` and `state`.  This are hugely important, because together they should control every aspect of how the component is rendered on the page.  That is, in a well constructured component, the result of the render method is a function of the components props and state **only**.  For a given set of props and state, a components render function should product the same results every. single. time.  

How are props and state different?  I think about it terms of  outside and within the control of the component.  Props are passed into the component for the outside.  It doesn't care how they got there or where they came from.  **Props should not be mutated** within a component because they are 'controlled' by something else.  State represents information that is controlled by the component and is only relevant _inside_ the component.


```
			 _______________________                         __________________
-------\ 	|						|    --------------\    |                  |
 PROPS  \	|		Component		|	    render()    \	|     Rendered     |
     	/	|		 (state)		|                   /   |     Component    |
-------/	|_______________________|    --------------/    |__________________|


```



Each piece of data in your application should only be managed in one place.  Once you understand the way data flows, it allows developer to quickly understand where data is displayed and where it actually managed.