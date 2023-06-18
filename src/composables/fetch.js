import { ref } from "vue";

export function useFetch() {

    const arrivals = ref(null);
    const departures = ref(null);
    const error = ref(null);

    fetch("http://localhost:4040/arrivals-departures")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            arrivals.value = data.flights.arrivals;
            departures.value = data.flights.departures;
        })
        .catch((err) => (error.value = err));

    return { arrivals, departures, error};
}
