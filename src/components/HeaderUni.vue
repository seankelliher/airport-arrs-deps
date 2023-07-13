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
        <h1 class="lite-blue-color">
            {{ pageName }}
        </h1>
    </header>
</template>
