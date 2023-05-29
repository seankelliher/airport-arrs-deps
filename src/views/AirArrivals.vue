<script setup>
import { ref } from "vue";
import PageTitle from "../components/PageTitle.vue";

const count = ref(0);
</script>

<template>
    <PageTitle title="Curent Arrivals" />

    <section>
        <button type="button" @click="count++">count is {{ count }}</button>
    </section>
</template>
