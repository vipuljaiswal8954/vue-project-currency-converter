<template>
  <div class="flex flex-col justify-center">
    <UserList />
  </div>
</template>

<script setup lang="ts">
import UserList from "./components/UserList.vue";
import Users from "./dummy-data";
import { provide } from "vue";

import { usersKey } from "./assets/InjectionKey";

provide(usersKey, Users);
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
