import { defineStore } from "pinia";
import type Currency from "../interfaces/Currency";
// import { ref, reactive } from "vue";

export const useCurrencyStore = defineStore("currency", {
  state: () => ({
    //component 1 state
    currency1: {
      value: "Kuwaiti Dinar" as String,
      code: 0 as Number,
      equalIndianRupee: 269.61 as Number,
    } as Currency,
    amount1: 0,
    //component 2 state
    currency2: {
      value: "Kuwaiti Dinar" as String,
      code: 0 as Number,
      equalIndianRupee: 269.61 as Number,
    } as Currency,
    amount2: 0,
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
    setCurrency1(newCurrency: Currency) {
      this.currency1 = newCurrency;
      this.calculateAmount2();
    },
    setCurrency2(newCurrency: Currency) {
      this.currency2 = newCurrency;
      this.calculateAmount1();
    },
    setAmount1(newAmount: number) {
      this.amount1 = newAmount;
    },
    setAmount2(newAmount: number) {
      this.amount2 = newAmount;
    },
    // store function to calculate amount 1
    calculateAmount1() {
      this.amount1 =
        (this.amount2 * this.currency2.equalIndianRupee) /
        this.currency1.equalIndianRupee;
    },
    // store function to calculate amount 2
    calculateAmount2() {
      this.amount2 =
        (this.amount1 * this.currency1.equalIndianRupee) /
        this.currency2.equalIndianRupee;
    },
  },
});
