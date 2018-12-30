const express = require("express"); // call express
const app = express(); // define our app using express

const port = process.env.PORT || 5000;
const routes = require("./routes")

app.use("/api", routes);

app.listen(port);
console.log("Server Started At: " + port);

// How do we want to organize this code?
// Fix up rest of the requests!
// How to see query parameters?
// Protect Endpoints!!!
// Tests