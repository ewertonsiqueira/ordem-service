<template>
  <TitleCards title="Serviços" />

  <div v-for="(service, idx) in services" :key="idx">
    <v-row dense align="center">
      <v-col cols="3">
        <v-text-field
          v-model="service.description"
          label="Descrição"
          placeholder="Adicione a descrição"
          variant="outlined"
          persistent-placeholder
          :rules="required"
        />
      </v-col>
      <v-col cols="3">
        <v-text-field
          v-model="service.price"
          label="Preço"
          type="number"
          placeholder="Preço"
          variant="outlined"
          persistent-placeholder
          :rules="required"
        />
      </v-col>
      <v-col cols="2">
        <v-text-field
          v-model="service.quantity"
          label="Quantidade"
          type="number"
          placeholder="Qtd"
          variant="outlined"
          persistent-placeholder
          :rules="required"
        />
      </v-col>
      <v-col cols="3">
        <v-text-field
          :value="serviceTotal(service)"
          label="Total"
          readonly
          persistent-placeholder
          variant="outlined"
        />
      </v-col>
      <v-col cols="1">
        <v-btn
          color="error"
          variant="plain"
          class="mb-5"
          :disabled="services.length === 1"
          @click="serviceOrderStore.removeService(idx)"
        >
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
  <v-row>
    <v-col>
      <v-btn variant="outlined" @click="serviceOrderStore.addService()">
        Adicionar
      </v-btn>
    </v-col>
  </v-row>
</template>

<script setup>
import { VRow, VCol, VTextField, VBtn, VIcon } from 'vuetify/components';
import { useServiceOrderStore } from '../store/serviceOrder';
import { storeToRefs } from 'pinia';
import TitleCards from './TitleCards.vue';

const serviceOrderStore = useServiceOrderStore();
const { services } = storeToRefs(serviceOrderStore);
import { formatNumber } from '../utils/formatNumber';
import { required } from '../utils/formRequired';

function serviceTotal (service) {
  return formatNumber(Number(service.price) * Number(service.quantity));
}

</script>
<style scoped>

</style>
