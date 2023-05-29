<script setup>
//import { ref } from "vue";

defineProps({
    title: {
        type: String,
        required: true
    }
});

// const count = ref(0);
</script>

<template>
    <div class="page-title">
        <h2>{{ title }}</h2>
    </div>
</template>
