<script setup>
import HeaderUni from "./components/HeaderUni.vue";
import Arrivals from "./views/CurrentArrs.vue";
import Departures from "./views/CurrentDeps.vue";
import { ref } from "vue";
const currentTab = ref("Arrivals");

const tabs = {
    Arrivals,
    Departures
};

defineOptions({
    inheritAttrs: false
});

</script>

<template>

    <div id="container">

        <HeaderUni pageName="Airport Arrivals &amp; Departures"/>

        <nav>
            <button
                v-for="(_, tab) in tabs"
                :key="tab"
                :class="['mid-green', { active: currentTab === tab }]"
                @click="currentTab = tab"
             >
                {{ tab }}
            </button>
        </nav>

        <main>
            <component :is="tabs[currentTab]"></component>   
        </main>

    </div>
</template>
