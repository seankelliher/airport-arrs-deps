<script setup>
import { ref } from "vue";

const items = ref([
    {
        id: 1,
        class: ["origin", "pale-blue"],
        origin: "Singpore",
        flight: "SA2763",
        airline: "Singapore Airlines",
        status: "on-time",
        time: "11:44AM",
        gate: "T5 - 41"
    },
    {
        id: 2,
        class: ["origin", "pale-blue"],
        origin: "Berlin",
        flight: "LU3765",
        airline: "Lufthansa Airlines",
        status: "on-time",
        time: "11:52AM",
        gate: "T2 - 32"
    },
    {
        id: 3,
        class: ["origin", "pale-blue"],
        origin: "Dallas",
        flight: "DL6752",
        airline: "Delta Airlines",
        status: "on-time",
        time: "11:58AM",
        gate: "T1 - 5"
    },
    {
        id: 4,
        class: ["origin", "pale-blue"],
        origin: "Toronto",
        flight: "CA7863",
        airline: "Air Canada",
        status: "delayed",
        time: "12:11PM",
        gate: "T3 - 15"
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
