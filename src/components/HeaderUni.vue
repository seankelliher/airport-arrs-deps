<script setup>
defineProps({
    pageName: {
        type: String,
        required: true
    }
});
</script>

<template>
    <header>
        <h1>{{ pageName }}</h1>
    </header>
</template>
