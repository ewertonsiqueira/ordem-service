<template>
  <div>
    <v-text-field
      v-model="orderDetails.number"
      variant="outlined"
      density="comfortable"
      label="Nº da OS"
      persistent-placeholder
    />
    <v-text-field
      v-model="orderDetails.date"
      variant="outlined"
      density="comfortable"
      label="Data Vencimento"
      type="date"
      persistent-placeholder
    />
    <v-select
      v-model="orderDetails.status"
      variant="outlined"
      density="comfortable"
      :items="['Aberta', 'Em andamento', 'Concluída', 'Cancelada']"
      placeholder="Escolha"
      label="Status da OS"
      persistent-placeholder
    />
  </div>
</template>
<script setup>
import { VRow, VCol, VTextField, VSelect } from 'vuetify/components';
import { useServiceOrderStore } from '../store/serviceOrder'
import { storeToRefs } from 'pinia';

const serviceOrderStore = useServiceOrderStore()
const { orderDetails } = storeToRefs(serviceOrderStore)
</script>
