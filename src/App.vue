<script setup>
import { VApp } from 'vuetify/components';
import Navigation from './components/Navigation.vue';
</script>

<template>
  <v-app>
    <Navigation>
      <router-view />
    </Navigation>
  </v-app>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
