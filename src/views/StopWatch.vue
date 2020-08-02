<template>
  <div>
    <h2>StopWatch</h2>
    <h1>{{countTime.toLocaleString()}}</h1>
    <div v-show="!isStart">
      <v-btn @click="start" color="primary">Start</v-btn>
      <v-btn @click="clear">Clear</v-btn>
    </div>
    <div v-show="isStart">
      <v-btn @click="stop" color="primary">Stop</v-btn>
      <v-btn @click="lap">Lap</v-btn>
    </div>
    <p
      v-for="(lapTime) in reverseLapTimes"
      :key="lapTime.id"
    >{{lapTime.id+" "+lapTime.lap.toLocaleString()+" + "+lapTime.diff.toLocaleString()}}</p>
  </div>
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