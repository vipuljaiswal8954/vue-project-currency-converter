<template>
  <div class="justify-center text-center my-60 basis-auto">
    <div class="h-24">
      <h1
        class="text-5xl font-sans md:font-serif dark:text-white bg-slate-300 dark:bg-black border border-purple-400 rounded-lg shadow-md dark:border-gray-700"
      >
        Currency Converter
      </h1>
    </div>
    <div class="flex grid-cols-2 justify-center">
      <!-- curreny 1 component -->
      <CurencyItem
        :amount="getAmount1"
        :availableCurrency="availableCurrency"
        :selectedCurrency="getCurrency1"
        @handleAmount="changeAmount1"
        @handleCurrency="changeCurrency1"
      />
      <!-- curreny 2 component -->
      <CurencyItem
        :amount="getAmount2"
        :selectedCurrency="getCurrency2"
        @handleAmount="changeAmount2"
        @handleCurrency="changeCurrency2"
      />
    </div>
    <!-- dark mode functionality -->
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
import type Currency from "./interfaces/Currency";
import { useCurrencyStore } from "./store/currency";
import data from "./currency-data"; //available currency which can be converted
import { storeToRefs } from "pinia";
const isDark = useDark();
const toggleDark = useToggle(isDark);
const store = useCurrencyStore();

const availableCurrency: Currency[] = data;

const { getAmount1, getAmount2, getCurrency1, getCurrency2 } =
  storeToRefs(store);

//handling changes in component 1 amount

function changeAmount1(newAmount: number) {
  store.setAmount1(newAmount);
  store.calculateAmount2(); //calculating amount 2 on values of amount 1
}
//handling changes in component 1 amount

function changeAmount2(newAmount: number) {
  store.setAmount2(newAmount);
  store.calculateAmount1(); ////calculating amount 1 on values of amount 2
}
function changeCurrency1(newCurrency: Currency) {
  store.setCurrency1(newCurrency);
}
function changeCurrency2(newCurrency: Currency) {
  store.setCurrency2(newCurrency);
}
</script>
