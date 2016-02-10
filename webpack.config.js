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
	module: {
		//tells webpack which loaders to use
		loaders: [
			{	//regex expression with will be tested against the filename  
				test: /\.jsx$/,
				//define the loaders to use for files that meet the test defined above
				//use babel and include the es2015, react, and stage-0 presets
				loaders: ['babel?'+JSON.stringify({presets:['es2015', 'react', 'stage-0']})], 
				//make sure to exclude anything in the node_modules folder
				exclude: /(node_modules)/,
				//tell babel loader to cache the results of the loader for faster builds
				cacheDirectory: true
		    }
		]
	}
};