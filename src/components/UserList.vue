<template>
  <div>
    <h1>User List</h1>
  </div>
  <div class="justify-center">
    <ul>
      <li v-for="user in users">
        <UserItem :key="user.id" :fullName="user.fullName" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import UserItem from "./UserItem.vue";
import { inject } from "vue";
import { usersKey } from "../assets/InjectionKey";

const users = inject(usersKey);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
