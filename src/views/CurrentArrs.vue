<script setup>
import PageTitle from "../components/PageTitle.vue";
import ArrsHeads from "../components/ArrsHeads.vue";
import ArrsItems from "../components/ArrsItems.vue";

// Prevents inherting non-prop attribute from tabs in App.vue.
// This created fragment and triggers warning.
defineOptions({
    inheritAttrs: false
});
</script>

<template>
    <PageTitle title="Current Arrivals" />
    <ArrsHeads />
    <ArrsItems />
</template>
