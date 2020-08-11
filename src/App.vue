<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item link to="/stopwatch">
          <v-list-item-action>
            <v-icon>mdi-alarm</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>StopWatch</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/timer">
          <v-list-item-action>
            <v-icon>mdi-av-timer</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Timer</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Tools PWA</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  components: {},

  data: () => ({
    drawer: null
  })
});
</script>
