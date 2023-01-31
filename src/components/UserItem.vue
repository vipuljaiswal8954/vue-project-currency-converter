<template>
  <div class="justify-center">
    <h2 class="my-2">{{ fullName }}</h2>
    <button class="my-2">View Projects</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  fullName: {
    type: String,
    required: true,
    id: { type: String, required: true },
  },
});
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
