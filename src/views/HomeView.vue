<template>
  <div class="container">
    <div>
      <Company />
    </div>
    <div>
      <OSDetails />
    </div>
    <div class="client">
      <OSClient />
    </div>
    <div class="services">
      <OSService />
    </div>
  </div>
</template>
<script setup>
import Company from '../components/Company.vue';
import OSClient from '../components/OSClient.vue';
import OSDetails from '../components/OSDetails.vue';
import OSService from '../components/OSService.vue';

</script>
<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 1fr);
  gap: 8px;
  margin: 20px;
}
.client {
  grid-column: 1 / span 2;
}
.services {
  grid-column: 1 / span 2;
}

</style>
