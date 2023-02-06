<template>
  <div
    class="w-40 flex flex-col m-8 bg-gray-600 dark:bg-purple-700 dark:border-purple-400"
  >
    <select
      class="dark:bg-black dark:text-white dark:border-purple-400"
      v-model="selectedCurrency"
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
      v-model="amount"
      @input="handleChange"
      type="number"
      class="dark:bg-black border-solid border-black border-2 h-8 dark:text-white dark:border-purple-400"
    />
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import type Currency from "@/interfaces/Currency";
const props = defineProps<{
  availableCurrency: Currency[];
  selectedCurrency: Currency;
  amount: number;
}>();
const emit = defineEmits(["handleCurrency", "handleAmount"]);
const selectedCurrency = ref(props.selectedCurrency);
const availableCurrency = props.availableCurrency;
const amount = ref(props.amount);

watch(selectedCurrency, (newCurrency) => {
  console.log(newCurrency);
  emit("handleCurrency", newCurrency);
});

watch(props, () => {
  amount.value = props.amount;
});
function handleChange() {
  emit("handleAmount", amount.value);
  console.log(amount.value);
}
</script>
