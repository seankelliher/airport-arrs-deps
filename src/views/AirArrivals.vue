<script setup>
import PageTitle from "../components/PageTitle.vue";
//import ButtonCounter from "../components/ButtonCounter.vue";

</script>

<template>
    <PageTitle title="Current Arrivals" />

    <!--<ButtonCounter />-->

    <section>
        <div class="origin warm-blue">
            <p>Origin</p>
        </div>
        <div class="flight warm-blue">
            <p>Flight</p>
        </div>
        <div class="airline warm-blue">
            <p>Airline</p>
        </div>
        <div class="status warm-blue">
            <p>Status</p>
        </div>
        <div class="time warm-blue">
            <p>Time</p>
        </div>
        <div class="gate warm-blue">
            <p>Gate</p>
        </div>
    </section>

    <section>
        <div class="origin pale-blue">
            <p>Singapore</p>
        </div>
        <div class="flight pale-blue">
            <p>SA2763</p>
        </div>
        <div class="airline pale-blue">
            <p>Singapore Airlines</p>
        </div>
        <div class="status pale-blue">
            <p>On-Time</p>
        </div>
        <div class="time pale-blue">
            <p>11:44AM</p>
        </div>
        <div class="gate pale-blue">
            <p>T5 - 41</p>
        </div>
    </section>
</template>
