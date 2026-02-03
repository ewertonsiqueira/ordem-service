<template>
  <v-card class="pa-4" variant="outlined">
    <v-card-title class="pb-2" style="font-weight: bold; color: #f1b600; font-size: 18px;">
      Dados do Cliente
    </v-card-title>
    <v-card-text>
      <v-row>
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
      <v-row>
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
    </v-card-text>
  </v-card>
</template>
<script setup>
import { VRow, VCol, VTextField } from 'vuetify/components';
import { useServiceOrderStore } from '../store/serviceOrder'
import { storeToRefs } from 'pinia';

const serviceOrderStore = useServiceOrderStore()
const { client } = storeToRefs(serviceOrderStore)
</script>
