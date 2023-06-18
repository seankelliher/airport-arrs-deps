<script setup>
import { useFetch } from "../composables/fetch.js";

const { arrivals, error } = useFetch();

</script>

<template>

    <section
        v-for="arrival in arrivals"
        :key="arrival.number"
    >
        <div class="origin pale-blue"><p>{{ arrival.movement.airport.name }}</p></div>
        <div class="flight pale-blue"><p>{{ arrival.callSign }}</p></div>
        <div class="airline pale-blue"><p>{{ arrival.airline.name }}</p></div>
        <div class="status pale-blue"><p>{{ arrival.status }}</p></div>
        <div class="time-sch pale-blue"><p>{{ `${arrival.movement.scheduledTimeLocal}`.substring(11, 16) }}</p></div>
        <div class="time-act pale-blue"><p>{{ `${arrival.movement.actualTimeLocal}`.substring(11, 16) }}</p></div>
    </section>

</template>
