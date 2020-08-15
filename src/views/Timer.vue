<template>
  <v-container>
    <h2>Timer</h2>
    <h1>{{ countTime.toLocaleString() }}</h1>
    <v-row>
      <v-col v-show="!isStart">
        <v-btn class="ma-2" @click="start" color="primary">Start</v-btn>
        <v-btn class="ma-2" @click="clear">Clear</v-btn
        ><v-btn v-if="!hasPush" class="ma-2" @click="allowPush"
          >Allow Push</v-btn
        >
      </v-col>
      <v-col v-show="isStart">
        <v-btn class="ma-2" @click="stop" color="primary">Stop</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          type="number"
          label="Hour"
          outlined
          v-model.number="times[0]"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          type="number"
          label="Minitus"
          outlined
          v-model.number="times[1]"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          type="number"
          label="Seconds"
          outlined
          v-model.number="times[2]"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import push from "push.js";

@Component
export default class Timer extends Vue {
  times = [0, 0, 0];
  countTime = 0;
  intervalId = 0;
  isStart = false;
  hasPush = true;
  mounted() {
    if (!push.Permission.has()) {
      this.hasPush = false;
    }
  }
  start() {
    this.isStart = true;
    this.countTime = this.times[0] * 3600 + this.times[1] * 60 + this.times[2];
    this.intervalId = setInterval(() => {
      if (this.countTime === 0) {
        console.log(push.Permission.has());
        push.create("Time is up.");
        this.playSound();
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
  playSound() {
    const alarm = new Audio("/alarm.mp3");
    alarm.play();
  }
  allowPush() {
    push.Permission.request(
      () => (this.hasPush = true),
      () => console.log("onDenied")
    );
  }
}
</script>
