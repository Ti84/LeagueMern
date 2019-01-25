const express = require("express"); // call express
const app = express(); // define our app using express

const port = process.env.PORT || 5000;
const summoner = require('./routes/api/summoner');
const champions = require('./routes/api/champions');

// Routes
app.use('/api', summoner);
app.use('/api', champions);

app.listen(port);
console.log("Server Started At: " + port);