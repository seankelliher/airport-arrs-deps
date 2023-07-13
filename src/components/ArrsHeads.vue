<script setup>
import { ref } from "vue";

const headings = ref([
    { id: 1, class: ["origin"], title: "Origin" },
    { id: 2, class: ["flight"], title: "Flight" },
    { id: 3, class: ["airline"], title: "Airline" },
    { id: 4, class: ["status"], title: "Status" },
    { id: 5, class: ["time-sch"], title: "Sched" },
    { id: 6, class: ["time-act"], title: "Actual" }
]);
</script>

<template>
    <section class="lite-blue-bg">
        <div
            v-for="heading in headings"
            :key="heading.id"
            :class="heading.class">
            <p class="dark-blue-color">
                {{ heading.title }}
            </p>
        </div>
    </section>
</template>
