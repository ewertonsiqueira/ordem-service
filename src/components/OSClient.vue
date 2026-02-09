<template>
  <v-card class="pa-4" variant="outlined">
    <v-row dense>
      <v-col cols="12">
        <title-cards title="Dados do Cliente" />
      </v-col>
      <v-col cols="6">
        <v-text-field
          v-model="client.name"
          variant="outlined"
          density="comfortable"
          label="Nome Completo"
          persistent-placeholder
        />
      </v-col>
      <v-col cols="6">
        <v-text-field
          v-model="client.phone"
          variant="outlined"
          density="comfortable"
          label="Telefone / WhatsApp"
          persistent-placeholder
        />
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="6">
        <v-text-field
          v-model="client.city"
          variant="outlined"
          density="comfortable"
          label="Cidade"
          persistent-placeholder
        />
      </v-col>
      <v-col cols="6">
        <v-text-field
          v-model="client.state"
          variant="outlined"
          density="comfortable"
          label="Estado"
          persistent-placeholder
        />
      </v-col>
    </v-row>
  </v-card>
</template>
<script setup>
import { VRow, VCol, VTextField } from 'vuetify/components';
import { useServiceOrderStore } from '../store/serviceOrder'
import { storeToRefs } from 'pinia';
import TitleCards from './TitleCards.vue';

const serviceOrderStore = useServiceOrderStore()
const { client } = storeToRefs(serviceOrderStore)
</script>

<style>
.title {
  font-weight: bold;
  font-size: 1.25rem;
  margin-bottom: 16px;
  background-color: #DFDFDF;
  border-radius: 4px;
  display: flex;
  justify-content: center;
}
</style>
