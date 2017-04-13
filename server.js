// sets up a simple express app, with an /api route and all
// other routes are directed towards the dist/index.html page.
// This catch all route, denoted with *, MUST come last after
// all other API routes have been defined.

// https://scotch.io/tutorials/mean-app-with-angular-2-and-the-angular-cli




// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Get our API routes
const api = require('./server/routes/api');

const app = express();

const uri = 'mongodb://cgradwohl:2chester@cluster0-shard-00-00-sqlil.mongodb.net:27017,cluster0-shard-00-01-sqlil.mongodb.net:27017,cluster0-shard-00-02-sqlil.mongodb.net:27017/Cluster0?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';

mongoose.connect(uri);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  // we're connected!
  console.log('success');
});


// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
