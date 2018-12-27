const express = require("express"); // call express
const app = express(); // define our app using express

const port = process.env.PORT || 8079;
const routes = require("./backend-app/routes")

app.use("/api", routes);

app.listen(port);
console.log("Server Started At: " + port);

// How do we want to organize this code?
// Fix up rest of the requests!
// How to see query parameters?
// Protect Endpoints!!!
// Tests