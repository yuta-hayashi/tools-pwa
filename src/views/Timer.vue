<template>
  <div>
    <h2>Timer</h2>
    <h1>{{countTime.toLocaleString()}}</h1>
    <div v-show="!isStart">
      <v-btn @click="start" color="primary">Start</v-btn>
      <v-btn @click="clear">Clear</v-btn>
    </div>
    <div v-show="isStart">
      <v-btn @click="stop" color="primary">Stop</v-btn>
    </div>
    <br />
    {{times}}
    <v-text-field type="number" label="Hour" outlined v-model.number="times[0]"></v-text-field>
    <v-text-field type="number" label="Minitus" outlined v-model.number="times[1]"></v-text-field>
    <v-text-field type="number" label="Seconds" outlined v-model.number="times[2]"></v-text-field>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Timer extends Vue {
  times = [0, 0, 0];
  countTime = 0;
  intervalId = 0;
  isStart = false;
  start() {
    this.isStart = true;
    this.countTime = this.times[0] * 3600 + this.times[1] * 60 + this.times[2];
    this.intervalId = setInterval(() => {
      if (this.countTime === 0) {
        this.stop();
        return;
      }
      this.countTime -= 1;
    }, 1000);
  }
  stop() {
    this.isStart = false;
    clearInterval(this.intervalId);
  }
  clear() {
    this.countTime = 0;
  }
}
</script>