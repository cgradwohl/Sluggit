const express = require('express'),
	path = require('path'),
	rootPath = path.normalize(__dirname + '/../'),
	router = express.Router();

module.exports = function(app){

	// Angularjs catches all routes
	router.get('/*', function(req, res) {
		res.sendFile(rootPath + 'dist/index.html', { user: req.user });
	});

	app.use('/', router);
};
