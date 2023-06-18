import { ref } from "vue";

export function useFetch() {

    const arrivals = ref(null);
    const departures = ref(null);
    const error = ref(null);

    const airport = "KIAD"; //Dulles Airport, ICAO code.
    const url = "ADD-URL-HERE";

    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "ADD-KEY-HERE",
            "X-RapidAPI-Host": "ADD-HOST-HERE"
        }
    };

    fetch(url, options)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            arrivals.value = data.arrivals;
            departures.value = data.departures;
        })
        .catch((err) => (error.value = err));

    return { arrivals, departures, error};
}
