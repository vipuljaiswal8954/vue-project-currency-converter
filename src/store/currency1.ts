import { defineStore } from "pinia";

export const useCurrencyStore1 = defineStore("currency1", {
  state: () => {
    return {
      currency1: {
        value: "Kuwaiti Dinar",
        code: 0,
        equalIndianRupee: 269.61,
        amount: 0,
      },
    };
  },
});
