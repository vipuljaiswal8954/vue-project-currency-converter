<template>
  <div
    class="w-40 flex flex-col m-8 bg-gray-600 dark:bg-purple-700 dark:border-purple-400"
  >
    <!-- select currency -->
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

    <!-- handle change in amount -->
    <input
      v-model="amount"
      @input="handleChange"
      type="number"
      class="dark:bg-black border-solid bg-slate-300 border-black border-2 h-8 dark:text-white dark:border-purple-400"
    />
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import type { PropType } from "vue";
import type Currency from "@/interfaces/Currency";
import data from "../currency-data";
const availableCurrency: Currency[] = data;
// const props = defineProps<{
//   availableCurrency: Currency[];
//   selectedCurrency: Currency;
//   amount: number | string;
// }>();
const props = defineProps({
  selectedCurrency: {
    type: Object as PropType<Currency>,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});
const emit = defineEmits(["handleCurrency", "handleAmount"]);
const selectedCurrency = ref(props.selectedCurrency);
const amount = ref(props.amount);

// watching selectedCurrency's changes and emit event for parent component

watch(selectedCurrency, (newCurrency) => {
  console.log(newCurrency);
  emit("handleCurrency", newCurrency);
});

// watching props to reflect in component ui

watch(props, () => {
  amount.value = props.amount;
});

// watching  changes in amount and emit event for parent component

function handleChange() {
  // handling empty string case
  emit("handleAmount", Number(amount.value));
}
</script>
