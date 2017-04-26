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
mongoose.connection.on('connected', () => {
    console.log('CONNECTED TO DB ' + envConfig.db);
});
mongoose.connection.on('error', (err) => {
    console.log('DB ERROR: ' + err);
});



// EXPRESS CONFIG
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(methodOverride());
// sets server to serve public folder, which hopefully is built on the server????
app.use(express.static(path.join(__dirname, 'public')));




// PASSPORT CONFIG
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);






// API ROUTES
const users = require('./api/users');
app.use('/users', users);

const posts = require('./api/posts');
app.use('/posts', posts);



// START SERVER
app.listen(envConfig.port, function(){
  console.log('Server listening on port ' + envConfig.port)
});
