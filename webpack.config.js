//bring in the node path utility
var path = require("path");
//export our configuration
module.exports = {
	//entry determines the entry point for our app
	entry: {
		//keys in the entry object are the bundle name, and the value is the relative path to entry point
		app: "./src/mount.jsx"
	},
	output: {
		path: path.join(__dirname, "dist"),//define the path where our files will be generated
		filename: "[name].bundle.js"//name of the file, [name] will be replaced with key in entry object ('app')
	},
	resolve: {
        modulesDirectories: ["node_modules", "common"]
    },
	module: {
		//tells webpack which loaders to use
		loaders: [
			{	//regex expression with will be tested against the filename  
				test: /\.jsx$/,
				//define the loaders to use for files that meet the test defined above
				//use babel and include the es2015, react, and stage-0 presets
				//add in react-hot-loader, MUST be first element in this array
				loaders: ['react-hot', 'babel?'+JSON.stringify({presets:['es2015', 'react', 'stage-0']})], 
				//make sure to exclude anything in the node_modules folder
				exclude: /(node_modules)/,
				//tell babel loader to cache the results of the loader for faster builds
				cacheDirectory: true
		    },
		    /*
		    	Specify the loaders for SCSS files
	    	*/
			{ 
				test: /\.scss$/, 
				/*
					Notice how we specify an array of loaders here.  Webpack will pass the file from the last one specified 
					to the first one.  Here's how it happens:

					1) The SASS loader compiles our SCSS file to CSS

					2) The CSS loader compiles that CSS into a text string

					3) The style loader uses JS to write that string to a <style> tag on the page
				*/
				loaders: ["style", "css", "sass"]
			}
		]
	}
};