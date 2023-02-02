<template>
  <div class="flex grid-cols-2 justify-center">
    <CurrencyItem :set="1" />
    <CurrencyItem :set="2" />
  </div>
</template>

<script setup lang="ts">
import CurrencyItem from "./components/CurrencyItem.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  justify-content: center;
  flex-basis: auto;
}
</style>
