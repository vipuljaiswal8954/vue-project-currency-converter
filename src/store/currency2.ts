import { defineStore } from "pinia";

export const useCurrencyStore2 = defineStore("currency2", {
  state: () => {
    return {
      currency2: {
        value: "Kuwaiti Dinar",
        code: 0,
        equalIndianRupee: 269.61,
        amount: 0,
      },
    };
  },
});
