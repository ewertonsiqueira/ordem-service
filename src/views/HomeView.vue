<template>
  <v-row class="d-flex ma-5">
    <v-col cols="6">
      <Company />
    </v-col>
    <v-col cols="6" class="d-flex flex-column justify-start">
      <OSDetails />
    </v-col>
  </v-row>
  <v-row class="ma-5">
    <v-col cols="12">
      <OSClient />
    </v-col>
  </v-row>
</template>
<script setup>
import Company from '../components/Company.vue';
import OSClient from '../components/OSClient.vue';
import OSDetails from '../components/OSDetails.vue';

</script>
