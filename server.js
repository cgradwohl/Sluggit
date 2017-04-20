const express = require('express'),
    path = require('path'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
    methodOverride = require('method-override'),
	cors = require('cors'),
	passport = require('passport');

    

// ENVIRONMENT CONFIG
const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const envConfig = require('./config/environment')[env];


// CONNECT TO DB
mongoose.Promise = global.Promise;
mongoose.connect(envConfig.db);


// EXPRESS CONFIG
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(methodOverride());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));


// PASSPORT CONFIG
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);


// ROUTES
// sets server to serve dist folder, which which is built on the server
require('./routes/index')(app);


// API ROUTES
const users = require('./api/users');
app.use('/users', users);

// const posts = require('./routes/posts');
// app.use('/feed', posts);



// START SERVER
app.listen(envConfig.port, function(){
  console.log('Server listening on port ' + envConfig.port)
});
