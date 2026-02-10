<template>
  <div>
    <title-cards title="Empresa" />
    <div>Rua Pastor Lioeses Domiciano, 256</div>
    <div>Joinville - SC</div>
    <div>62 985921947</div>
    <div>Email: </div>

    <div class="mt-5">
      <v-btn color="primary" @click="serviceOrderStore.gerarOsServiceOrder()">
        Gerar Ordem de Serviço
      </v-btn>
    </div>
  </div>
</template>
<script setup>
import TitleCards from './TitleCards.vue';
import { VBtn } from 'vuetify/components';
import { useServiceOrderStore } from '../store/serviceOrder';

const serviceOrderStore = useServiceOrderStore();

</script>
<style>
.title {
  font-size: 24px;
  font-weight: bold;
}
</style>
