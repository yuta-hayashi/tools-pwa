<template>
  <v-container class="text-center">
    <h2>StopWatch</h2>
    <h1>{{countTime.toFixed(2)}}</h1>
    <div v-show="!isStart">
      <v-btn class="ma-2" @click="start" color="primary">Start</v-btn>
      <v-btn class="ma-2" @click="clear">Clear</v-btn>
    </div>
    <div v-show="isStart">
      <v-btn class="ma-2" @click="stop" color="primary">Stop</v-btn>
      <v-btn class="ma-2" @click="lap">Lap</v-btn>
    </div>
    <p
      v-for="(lapTime) in reverseLapTimes"
      :key="lapTime.id"
    >{{lapTime.id+" "+lapTime.lap.toFixed(2)+" + "+lapTime.diff.toLocaleString()}}</p>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class StopWatch extends Vue {
  countTime = 0;
  intervalId = 0;
  isStart = false;
  lapTimes: { id: number; lap: number; diff: number }[] = [];
  start() {
    this.isStart = true;
    this.intervalId = setInterval(() => (this.countTime += 0.01), 10);
  }
  stop() {
    this.isStart = false;
    clearInterval(this.intervalId);
  }
  clear() {
    this.countTime = 0;
    this.lapTimes = [];
  }
  lap() {
    let diff = 0;
    if (this.lapTimes.length == 0) {
      diff = this.countTime;
    } else {
      diff = this.countTime - this.lapTimes[this.lapTimes.length - 1].lap;
    }
    this.lapTimes.push({
      id: this.lapTimes.length + 1,
      lap: this.countTime,
      diff: diff
    });
  }
  get reverseLapTimes() {
    return this.lapTimes.slice().reverse();
  }
}
</script>