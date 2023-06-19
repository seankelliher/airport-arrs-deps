<script setup>
import { useFetch } from "../composables/fetch.js";

const { arrivals, error } = useFetch();

</script>

<template>

    <template
        v-for="arrival in arrivals"
        :key="arrival.number"
    >

        <section v-if="arrival.airline.name !== 'Unknown/Private owner'">
            <div class="origin pale-blue">
                <p v-if="arrival.movement.airport.name !== NULL">
                    {{ arrival.movement.airport.name }}
                </p>
                <p v-else>
                    n/a
                </p>
            </div>
            <div class="flight pale-blue">
                <p v-if="arrival.callSign !== NULL">
                    {{ arrival.callSign }}
                </p>
                <p v-else>
                    n/a
                </p>
            </div>
            <div class="airline pale-blue">
                <p v-if="arrival.airline.name !== NULL">
                    {{ arrival.airline.name }}
                </p>
                <p v-else>
                    n/a
                </p>
            </div>
            <div class="status pale-blue">
                <p v-if="arrival.status !== NULL">
                    {{ arrival.status }}
                </p>
                <p v-else>
                    n/a
                </p>
            </div>
            <div class="time-sch pale-blue">
                <p v-if="arrival.movement.scheduledTimeLocal !== NULL">
                    {{ `${arrival.movement.scheduledTimeLocal}`.substring(11, 16) }}
                </p>
                <p v-else>
                    n/a
                </p>
            </div>
            <div class="time-act pale-blue">
                <p v-if="arrival.movement.actualTimeLocal !== NULL">
                    {{ `${arrival.movement.actualTimeLocal}`.substring(11, 16) }}
                </p>
                <p v-else>
                    n/a
                </p>
            </div>
        </section>

    </template>

</template>
