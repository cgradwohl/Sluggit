const express = require('express'),
    path = require('path'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
    methodOverride = require('method-override'),
	cors = require('cors'),
	app = express();

// ENVIRONMENT CONFIG
const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
	envConfig = require('./config/environment')[env];


// connect to DB mabey add this to config
mongoose.connect(envConfig.db);


// EXPRESS CONFIG
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(methodOverride());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));

// ROUTES
const users = require('./routes/users');
const posts = require('./routes/posts');

app.use('/users', users);
app.use('/feed', posts);

require('./routes/index')(app);

// Start server
app.listen(envConfig.port, function(){
  console.log('Server listening on port ' + envConfig.port)
});
