<script setup>
defineProps({
    title: {
        type: String,
        required: true
    }
});
</script>

<template>
    <div class="page-title">
        <h2>{{ title }}</h2>
    </div>
</template>
