<template>
  <v-row>
		<v-col cols="12" class="d-flex align-center">
			<span class="text-body-1 mr-4" style="min-width: 120px;">Nº da OS</span>
			<v-text-field
				prepend-inner-icon="mdi-pound"
				variant="outlined"
				density="comfortable"
				hide-details
			></v-text-field>
		</v-col>
		<v-col cols="12" class="d-flex align-center">
			<span class="text-body-1 mr-4" style="min-width: 120px;">Vencimento</span>
			<!-- <v-date-picker
				prepend-inner-icon="mdi-calendar"
				variant="outlined"
				density="comfortable"
				hide-details
			></v-date-picker> -->
		</v-col>
		<v-col cols="12" class="d-flex align-center">
			<span class="text-body-1 mr-4" style="min-width: 120px;">Status da OS</span>
			<v-select
				prepend-inner-icon="mdi-power"
				variant="outlined"
				density="comfortable"
				:items="['Aberta', 'Em andamento', 'Concluída', 'Cancelada']"
				placeholder="Escolha"
				hide-details
			></v-select>
		</v-col>
	</v-row>  
</template>
<script setup>
import { VRow, VCol, VTextField, VSelect, VDatePicker } from 'vuetify/components';
</script>