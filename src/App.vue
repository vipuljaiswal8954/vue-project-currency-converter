<template>
  <div class="justify-center">
    <div class="h-24">
      <h1
        class="text-5xl font-sans md:font-serif dark:text-white bg-white dark:bg-black border border-purple-400 rounded-lg shadow-md dark:border-gray-700"
      >
        Currency Converter
      </h1>
    </div>
    <div class="flex grid-cols-2 justify-center">
      <div
        class="w-40 flex flex-col m-8 bg-gray-600 dark:bg-purple-700 dark:border-purple-400"
      >
        <select
          class="dark:bg-black dark:text-white dark:border-purple-400"
          v-model="selectedCurrency1"
        >
          <option
            v-for="currency in availableCurrency"
            :value="currency"
            :key="currency.code"
          >
            {{ currency.value }}
          </option>
        </select>
        <input
          v-model="amount1"
          type="number"
          class="dark:bg-black border-solid border-black border-2 h-8 dark:text-white dark:border-purple-400"
        />
      </div>
      <div class="w-40 flex flex-col m-8">
        <select
          class="dark:bg-black dark:text-white dark:border-purple-400"
          v-model="selectedCurrency2"
        >
          <option
            v-for="currency in availableCurrency"
            :value="currency"
            :key="currency.code"
          >
            {{ currency.value }}
          </option>
        </select>

        <input
          class="dark:bg-black border-solid border-black border-2 h-8 dark:text-white dark:border-purple-400"
          v-model="amount2"
          type="number"
        />
      </div>
    </div>
    <button
      @click="toggleDark()"
      class="px-4 py-2 text-white bg-gray-600 dark:bg-purple-700"
    >
      Dark Toggle
    </button>
  </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";

import { ref, reactive, watch } from "vue";
import type Currency from "./interfaces/Currency";
import { useCurrencyStore } from "./store/currency";
import data from "./currency-data";
const isDark = useDark();
const toggleDark = useToggle(isDark);
const store = useCurrencyStore();

const availableCurrency: Currency[] = data;

const { getAmount1, getAmount2, getCurrency1, getCurrency2 } = store;
const selectedCurrency1 = ref(getCurrency1);
const selectedCurrency2 = ref(getCurrency2);
const amount1 = ref(getAmount1);
const amount2 = ref(getAmount2);
watch(selectedCurrency1, (newCurrency) => {
  store.setCurrency1(newCurrency);
  store.calculateAmount2();
  amount2.value = store.getAmount2;
});
watch(amount1, (newAmount) => {
  store.setAmount1(newAmount);
  store.calculateAmount2();
  amount2.value = store.getAmount2;
});
watch(selectedCurrency2, (newCurrency) => {
  store.setCurrency2(newCurrency);
  store.calculateAmount1();
  amount1.value = store.getAmount1;
});
watch(amount2, (newAmount) => {
  store.setAmount2(newAmount);
  store.calculateAmount1();
  amount1.value = store.getAmount1;
});
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
