const path = require("path");

module.exports = {
	mode: "development",
	entry: "./src/app.ts", // root-entry to the project
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		publicPath: "/dist/",
	},
	devServer: {
		static: {
			directory: path.join(__dirname, "/"),
		},
	},
	devtool: "inline-source-map",
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".ts", ".js"],
	},
};
