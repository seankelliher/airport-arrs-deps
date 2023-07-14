<script setup>
import { useFetch } from "../composables/fetch.js";

const { departures, error } = useFetch();
console.log(departures);

</script>

<template>

    <template
        v-for="departure in departures"
        :key="departure.number"
    >

        <section v-if="departure.airline.name !== 'Unknown/Private owner'">
            <div class="origin">
                <p v-if="departure.movement.airport.name !== NULL">
                    {{ departure.movement.airport.name }}
                </p>
                <p v-else>
                    n/a
                </p>
            </div>
            <div class="flight">
                <p v-if="departure.callSign !== NULL">
                    {{ departure.callSign }}
                </p>
                <p v-else>
                    n/a
                </p>
            </div>
            <div class="airline">
                <p v-if="departure.airline.name !== NULL">
                    {{ departure.airline.name }}
                </p>
                <p v-else>
                    n/a
                </p>
            </div>
            <div class="status">
                <p v-if="departure.status !== NULL">
                    {{ departure.status }}
                </p>
                <p v-else>
                    n/a
                </p>
            </div>
            <div class="time-sch">
                <p v-if="departure.movement.scheduledTimeLocal !== NULL">
                    {{ `${departure.movement.scheduledTimeLocal}`.substring(11, 16) }}
                </p>
                <p v-else>
                    n/a
                </p>
            </div>
            <div class="time-act">
                <p v-if="departure.movement.actualTimeLocal !== NULL">
                    {{ `${departure.movement.actualTimeLocal}`.substring(11, 16) }}
                </p>
                <p v-else>
                    n/a
                </p>
            </div>
        </section>

    </template>

</template>
