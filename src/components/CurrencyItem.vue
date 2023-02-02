<template>
  <div class="w-40 flex flex-col m-8">
    <select v-model="selectedCurrency">
      <option
        v-for="currency in availableCurrency"
        :value="currency"
        :key="currency.code"
      >
        {{ currency.value }}
      </option>
    </select>

    <input
      v-model="amount"
      type="text"
      class="border-solid border-black border-2 h-8"
    />
  </div>
</template>
<script setup lang="ts">
import availableCurrency from "../currency-data";
import { ref, watch } from "vue";
import { useCurrencyStore1 } from "../store/currency1";
import { useCurrencyStore2 } from "../store/currency2";
const store1 = useCurrencyStore1();
const store2 = useCurrencyStore2();
const props = defineProps({
  set: Number,
});

const selectedCurrency = ref(availableCurrency[0]);

const amount = ref(0);

console.log(props.set);

watch(selectedCurrency, (newCurrency) => {
  if (props.set == 1) {
    store1.currency1 = newCurrency;
  } else {
    store2.currency2 = newCurrency;
  }
});

watch(amount, (newAmount) => {
  if (props.set == 1) {
    store1.amount = newAmount;
    store2.amount =
      (newAmount * store1.currency1.equalIndianRupee) /
      store2.currency2.equalIndianRupee;
  } else {
    store2.amount = newAmount;
    store1.amount =
      (newAmount * store2.currency2.equalIndianRupee) /
      store1.currency1.equalIndianRupee;
  }
});
</script>
