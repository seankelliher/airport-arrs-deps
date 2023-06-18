<script setup>
import { ref } from "vue";

const headings = ref([
    { id: 1, class: ["destination", "warm-blue"], title: "Destination" },
    { id: 2, class: ["flight", "warm-blue"], title: "Flight" },
    { id: 3, class: ["airline", "warm-blue"], title: "Airline" },
    { id: 4, class: ["status", "warm-blue"], title: "Status" },
    { id: 5, class: ["time-sch", "warm-blue"], title: "Sched" },
    { id: 6, class: ["time-act", "warm-blue"], title: "Actual" }
]);
</script>

<template>
    <section>
        <div
            v-for="heading in headings"
            :key="heading.id"
            :class="heading.class">
            <p>{{ heading.title }}</p>
        </div>
    </section>
</template>
