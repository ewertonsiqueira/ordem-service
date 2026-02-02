<template>
  <v-container fluid >
    <v-navigation-drawer
      class="bg-deep-purple"
      theme="dark"
      permanent
    >
      <v-list color="transparent">
        <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard"></v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block>
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-main>
      <slot></slot>
    </v-main>
  </v-container>
</template>
<script setup>
	import {
		VMain,
		VNavigationDrawer,
		VList,
		VListItem,
		VBtn
	} from 'vuetify/components';
</script>