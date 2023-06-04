<script setup>
import PageTitle from "../components/PageTitle.vue";
import DepsHeads from "../components/DepsHeads.vue";
import DepsItems from "../components/DepsItems.vue";

// Prevents inherting non-prop attribute from tabs in App.vue.
// This created fragment and triggers warning.
defineOptions({
    inheritAttrs: false
});
</script>

<template>
    <PageTitle title="Current Departures" />
    <DepsHeads />
    <DepsItems />
</template>
