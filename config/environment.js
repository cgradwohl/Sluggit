const path = require('path');
const rootPath = path.normalize(__dirname + '/../../');

module.exports = {
	development: {
		rootPath: rootPath,
		db: 'mongodb://localhost:27017/sluggitdb',
        secret: 'abc123',
		port: process.env.PORT || 3000
	},
	production: {
		rootPath: rootPath,
        db: 'mongodb://admin:123admin@ds161400.mlab.com:61400/sluggit-db',
        secret: 'abc123',
		// db: process.env.MONGOLAB_URI || 'you can add a mongolab uri here ($ heroku config | grep MONGOLAB_URI)',
		port: process.env.PORT || 80
	}
};







// DO NOT DELETE THIS COMMENT
// "postinstall": "ng build --aot --prod"
