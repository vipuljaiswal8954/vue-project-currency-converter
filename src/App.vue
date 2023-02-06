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
      <CurencyItem
        :amount="getAmount1"
        :availableCurrency="availableCurrency"
        :selectedCurrency="getCurrency1"
        @handleAmount="changeAmount1"
        @handleCurrency="changeCurrency1"
      />
      <CurencyItem
        :amount="getAmount2"
        :availableCurrency="availableCurrency"
        :selectedCurrency="getCurrency2"
        @handleAmount="changeAmount2"
        @handleCurrency="changeCurrency2"
      />
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
import CurencyItem from "./components/CurencyItem.vue";
import { useDark, useToggle } from "@vueuse/core";
import { ref, isRef } from "vue";
import type Currency from "./interfaces/Currency";
import { useCurrencyStore } from "./store/currency";
import data from "./currency-data";
import { storeToRefs } from "pinia";
const isDark = useDark();
const toggleDark = useToggle(isDark);
const store = useCurrencyStore();

const availableCurrency: Currency[] = data;

const { getAmount1, getAmount2, getCurrency1, getCurrency2 } =
  storeToRefs(store);
console.log(isRef(getAmount1));

function changeAmount1(newAmount: number) {
  console.log("Change Amount1");
  store.setAmount1(newAmount);
  store.calculateAmount2();
}
function changeAmount2(newAmount: number) {
  store.setAmount2(newAmount);
  store.calculateAmount1();
}
function changeCurrency1(newCurrency: Currency) {
  store.setCurrency1(newCurrency);
}
function changeCurrency2(newCurrency: Currency) {
  console.log("change Currency 2");

  store.setCurrency2(newCurrency);
}
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
