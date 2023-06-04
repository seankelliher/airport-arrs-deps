<script setup>
import { ref } from "vue";

const items = ref([
    {
        id: 1,
        class: ["origin", "pale-blue"],
        origin: "Phoenix",
        flight: "JB2763",
        airline: "JetBlue",
        status: "on-time",
        time: "11:40AM",
        gate: "T3 - 3"
    },
    {
        id: 2,
        class: ["origin", "pale-blue"],
        origin: "London",
        flight: "BA3876",
        airline: "British Airways",
        status: "on-time",
        time: "11:44AM",
        gate: "T7 - 21"
    },
    {
        id: 3,
        class: ["origin", "pale-blue"],
        origin: "Kingston",
        flight: "AJ3876",
        airline: "Air Jamaica",
        status: "on-time",
        time: "11:53AM",
        gate: "T6 - 19"
    },
    {
        id: 4,
        class: ["origin", "pale-blue"],
        origin: "Dubia",
        flight: "EM3876",
        airline: "Emirates",
        status: "delayed",
        time: "11:56PM",
        gate: "T3 - 7"
    }
]);

</script>

<template>
    <section
        v-for="item in items"
        :key="item.id"
    >
        <div class="origin pale-blue"><p>{{ item.origin }}</p></div>
        <div class="flight pale-blue"><p>{{ item.flight }}</p></div>
        <div class="airline pale-blue"><p>{{ item.airline }}</p></div>
        <div class="status pale-blue"><p>{{ item.status }}</p></div>
        <div class="time pale-blue"><p>{{ item.time }}</p></div>
        <div class="gate pale-blue"><p>{{ item.gate }}</p></div>
    </section>
</template>
