<script setup>
import { useFetch } from "../composables/fetch.js";

const { departures, error } = useFetch();

</script>

<template>

    <section
        v-for="departure in departures"
        :key="departure.number"
    >
        <div class="origin pale-blue"><p>{{ departure.movement.airport.name }}</p></div>
        <div class="flight pale-blue"><p>{{ departure.callSign }}</p></div>
        <div class="airline pale-blue"><p>{{ departure.airline.name }}</p></div>
        <div class="status pale-blue"><p>{{ departure.status }}</p></div>
        <div class="time-sch pale-blue"><p>{{ `${departure.movement.scheduledTimeLocal}`.substring(11, 16) }}</p></div>
        <div class="time-act pale-blue"><p>{{ `${departure.movement.actualTimeLocal}`.substring(11, 16) }}</p></div>
    </section>

</template>
