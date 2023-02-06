import { defineStore } from "pinia";
import type Currency from "../interfaces/Currency";
import { ref, reactive } from "vue";

export const useCurrencyStore = defineStore("currency", {
  state: () => ({
    currency1: reactive({
      value: "Kuwaiti Dinar" as String,
      code: 0 as Number,
      equalIndianRupee: 269.61 as Number,
    } as Currency),
    amount1: ref(0),
    currency2: reactive({
      value: "Kuwaiti Dinar" as String,
      code: 0 as Number,
      equalIndianRupee: 269.61 as Number,
    } as Currency),
    amount2: ref(0),
  }),
  getters: {
    getCurrency1(): Currency {
      return this.currency1;
    },
    getCurrency2(): Currency {
      return this.currency2;
    },
    getAmount1(): number {
      return this.amount1;
    },
    getAmount2(): number {
      return this.amount2;
    },
  },
  actions: {
    // any amount of arguments, return a promise or not
    setCurrency1(newCurrency: Currency) {
      this.currency1 = newCurrency;
    },
    setCurrency2(newCurrency: Currency) {
      this.currency2 = newCurrency;
    },
    setAmount1(newAmount: number) {
      this.amount1 = newAmount;
    },
    setAmount2(newAmount: number) {
      this.amount2 = newAmount;
    },
    calculateAmount1() {
      this.amount1 =
        (this.amount2 * this.currency2.equalIndianRupee) /
        this.currency1.equalIndianRupee;
    },
    calculateAmount2() {
      this.amount2 =
        (this.amount1 * this.currency1.equalIndianRupee) /
        this.currency2.equalIndianRupee;
    },
  },
});
