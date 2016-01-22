module.exports = {
	entry: "./web/static/js/app.js",

	output: {
		path: "./priv/static/js",
		filename: "app.js"
	},
	
	module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel",
      query: {
        presets: ["es2015"]
      }
    }]
  },

	resolve: {
	  modulesDirectories: [ __dirname + "/web/static/js" ],
	  alias: {
	    phoenix_html:
	      __dirname + "/deps/phoenix_html/web/static/js/phoenix_html.js",
	    phoenix:
	      __dirname + "/deps/phoenix/web/static/js/phoenix.js"
	  }
	}
};
