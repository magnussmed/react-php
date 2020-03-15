// Browsersync proxy URL
const devUrl = 'localhost:9090';

const files = {
	'css/normalize.min.css': './node_modules/normalize.css/normalize.css',
	'css/main.min': './css/main.css',
	'js/main.min.js': './js/main.js'
};

// Export devUrl and files
module.exports = {
	devUrl,
	files,
};
