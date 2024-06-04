// Import the ExpressJS package
const express = require('express');
// Create an instance of Express
const app = express();
// Set up any data needed to give to the server later
const port = 3000;

// Configure settings to allow data to be sent into the server
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Import the router and assign to a variable
// The name of the variable does not matter
const basicRouterImported = require('./basicRouter');
// Tell the server to use the router,
// and specify a prefix for the router
app.use("/basicFancyRouter", basicRouterImported)
