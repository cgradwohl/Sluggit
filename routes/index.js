const express = require('express'),
	path = require('path'),
	rootPath = path.normalize(__dirname + '/../'),
	router = express.Router();

module.exports = function(app){

	// angularjs catch all route
	router.get('/*', function(req, res) {
		res.sendFile(rootPath + 'dist/index.html', { user: req.user });
	});

	app.use('/', router);
};
