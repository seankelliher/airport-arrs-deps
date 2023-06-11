// ========================
// Packages
// ========================
const express = require("express");
const app = express();

// ========================
// Middlewares
// ========================
app.use(express.static(__dirname + "/dist/")); // For Heroku deployment.

// ========================
// Routes
// ========================
const token = process.env.APP_TOKEN; // In Heroku, "Open Data" token kept here.
const errorMsg = "An error occured.";

app.get("/arrivals", (req, res) => {
    fetch(`ADD-URL-HERE`)
        .then(res => {
            if (!res.ok) {
                throw new Error(`${errorMsg} ${res.statusText}.`);
            } else {
                return res.json();
            }
        })
        .then(data => {
            res.send({ trends: data });
        })
        .catch(error => alert(error));
});

app.get("/departures", (req, res) => {
    fetch(`ADD-URL-HERE`)
        .then(res => {
            if (!res.ok) {
                throw new Error(`${errorMsg} ${res.statusText}.`);
            } else {
                return res.json();
            }
        })
        .then(data => {
            res.send({ scenes: data });
        })
        .catch(error => alert(error));
});

app.get(/.*/, function(req, res) {
    res.sendFile(__dirname + "/dist/index.html");
});

// ========================
// Listen
// ========================
app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});

/*app.listen(4040, () => {
    console.log("Server listening on port 4040");
});*/
