// Dependencies
const express = require("express");
const timeHumainFriendlyText = require("./timeText");

const app = express();
const port = process.env.PORT || 3000;

// Get the property time from list of arguments
var time = process.argv.slice(2)[0];

app.get("/time", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify({ time: timeHumainFriendlyText(time) }));
});

// Launch our server on port 3001.
const server = app.listen(port, () => {
    console.log(`Start listening to port ${port}...`);
});
