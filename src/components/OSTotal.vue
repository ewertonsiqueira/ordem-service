<template>
  <v-card border class="pa-5" elevation="0">
    <v-card-title class="pb-2">
      SubTotal: R$ {{ formatNumber(total) }}
    </v-card-title>
    <div class="ma-2">
      <v-text-field
        v-model="discount"
        label="Desconto"
        type="number"
        variant="outlined"
        persistent-placeholder
      />
      <v-select
        v-model="discount_type"
        :items="['R$', '%']"
        label="Porcentagem de Desconto"
        variant="outlined"
        persistent-placeholder
      />
    </div>
    <v-card-text>
      TOTAL: {{ formatNumber(total) }}
    </v-card-text>
  </v-card>
</template>
<script setup>
import { VCard, VSelect, VTextField } from 'vuetify/components';
import { useServiceOrderStore } from '../store/serviceOrder';
import { storeToRefs } from 'pinia';
import { formatNumber } from '../utils/formatNumber';

const serviceOrderStore = useServiceOrderStore();
const { total, discount_type, discount } = storeToRefs(serviceOrderStore);

</script>
