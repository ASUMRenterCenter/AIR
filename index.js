const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const cors = require("cors");
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(pino);
app.use(cors());

app.post("/login", function(req, res) {
	const username = req.body.username;
	const password = req.body.password;
	console.log(username);
	console.log(password);
	res.send("got it");
});
// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "client/build")));

// Anything that doesn't match the above, send back index.html
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname + "/client/build/index.html"));
});
