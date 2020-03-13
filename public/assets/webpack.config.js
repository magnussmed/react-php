const path									= require('path');
const StyleLintPl						= require('stylelint-webpack-plugin');
const MiniCssExtractPlugin	= require('mini-css-extract-plugin');

const projectConfig					= require('./project.config');

module.exports = {
	devtool: 'soruce-map',
	entry: projectConfig.files,
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
						MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: {
								importLoaders: 1,
								sourceMap: true,
								url: false
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								ident: 'postcss',
								sourceMap: true,
								config: {
									path: 'postcss.config.js'
								}
							}
						},
					]
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			}
		]
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name]'
	},
	plugins: [
		new StyleLintPl({
			configFile: 'stylelint.config.js',
			files: 'css/**/*.css'
		}),
		new MiniCssExtractPlugin()
	]
};
