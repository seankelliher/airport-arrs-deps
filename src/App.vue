<script setup>
import HeaderUni from "./components/HeaderUni.vue";
import Arrivals from "./views/AirArrivals.vue";
import Departures from "./views/AirDepartures.vue";
import { ref } from "vue";
const currentTab = ref("Arrivals");

const tabs = {
    Arrivals,
    Departures
};
</script>

<template>

    <div id="container">

        <HeaderUni />

        <nav>
            <button
                v-for="(_, tab) in tabs"
                :key="tab"
                :class="{ active: currentTab === tab }"
                @click="currentTab = tab"
             >
                {{ tab }}
            </button>
            
        </nav>

        <main>
            <component :is="tabs[currentTab]" class="tab"></component>      
        </main>

    </div>
    <!--<div>
        <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
            <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
    </div>-->
</template>
