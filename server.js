// This is how we import modules in JS
const express = require("express");
const path = require("path");

// the app is an express app
const app = express();
//const cors = require('cors')

//app.use(cors())

// use vs get
// app.get is called when the http method is a get
// app.use is called whatever the http method is
// the express.static grabs the path for us to use and "exposes" its content so we can access it publically
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")))

// if we get any links we will just look at index.html in the frontend folder
// req us a request from http and res is the response to send back
app.get("/*", (req, res) => {

    // we send a file to as a response to render i believe
    // path.resolve pre-appends from right to left to find the absolute path of the file
    // example index.html is first then we add frontend to get the path ../frontend/index.html
    res.sendFile(path.resolve("frontend", "index.html"))
})

// listen to a port and display the message
app.listen(process.env.PORT || 8000, () => console.log("Server running just like this"));