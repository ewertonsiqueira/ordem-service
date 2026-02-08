<template>
  <div class="title">
    {{ title }}
  </div>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>
<style scoped>
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
