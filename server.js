// ========================
// Packages
// ========================
const express = require("express");
const app = express();

// ========================
// Middlewares
// ========================
//app.use(express.static(__dirname + "/dist/")); // For Heroku deployment.

// ========================
// Variables & Calculations
// ========================

//Dulles Airport, ICAO code.
const airport = "KIAD";

//Current date/time since Epoch, in ms.
const currentMs = new Date().getTime();

// Display window. 2 hours before, 3 hours after. 3,600,000 ms/hour.
const openMs = currentMs - 7200000;
const closeMs = currentMs + 10800000;

// Display window in date.
const openFormated = new Date(openMs);
const closeFormated = new Date(closeMs);

// Display window year, month, day individually.
const openYear = openFormated.getFullYear();
const openMonth = openFormated.getMonth() + 1; // +1 since months begin at 0.
const openDay = openFormated.getDate();
const closeYear = closeFormated.getFullYear();
const closeMonth = closeFormated.getMonth() + 1; // +1 since months begin at 0.
const closeDay = closeFormated.getDate();

// Display window hours & minutes individually.
const openHour = openFormated.getHours();
const openMinute = openFormated.getMinutes();
const closeHour = closeFormated.getHours();
const closeMinute = closeFormated.getMinutes();

// Add zero if less than 10.
const openMonthCorrected = openMonth < 10 ? `0${openMonth}` : openMonth;
const openDayCorrected = openDay < 10 ? `0${openDay}` : openDay;
const openHourCorrected = openHour < 10 ? `0${openHour}` : openHour;
const openMinuteCorrected = openMinute < 10 ? `0${openMinute}` : openMinute;
const closeMonthCorrected = closeMonth < 10 ? `0${closeMonth}` : closeMonth;
const closeDayCorrected = closeDay < 10 ? `0${closeDay}` : closeDay;
const closeHourCorrected = closeHour < 10 ? `0${closeHour}` : closeHour;
const closeMinuteCorrected = closeMinute < 10 ? `0${closeMinute}` : closeMinute;

// Date/Time formatted for fetch.
const openDate = `${openYear}-${openMonthCorrected}-${openDayCorrected }`;
const closeDate = `${closeYear}-${closeMonthCorrected}-${closeDayCorrected }`;
const openTime = `${openHourCorrected}:${openMinuteCorrected }`;
const closeTime = `${closeHourCorrected}:${closeMinuteCorrected }`;

// ========================
// Routes
// ========================
const url = `https://aerodatabox.p.rapidapi.com/flights/airports/icao/${airport}/${openDate}T${openTime}/${closeDate}T${closeTime}?direction=Both&withCancelled=true&withCodeshared=true&withLocation=false`;
//const token = process.env.APP_TOKEN; // In Heroku, "Open Data" token kept here.
const errorMsg = "An error occured.";

const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "ADD-KEY-HERE",
        "X-RapidAPI-Host": "aerodatabox.p.rapidapi.com"
    }
};

app.get("/arrivals-departures", (req, res) => {
    fetch(url, options)
        .then(res => {
            if (!res.ok) {
                throw new Error(`${errorMsg} ${res.statusText}.`);
            } else {
                return res.json();
            }
        })
        .then(data => {
            res.send({ flights: data });
        })
        .catch(error => console.log(error));
});

app.get(/.*/, function(req, res) {
    res.sendFile(__dirname + "/dist/index.html");
});

// ========================
// Listen
// ========================
/*app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});*/

app.listen(4040, () => {
    console.log("Server listening on port 4040");
});
