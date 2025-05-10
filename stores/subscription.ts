import { defineStore } from "pinia";
import * as subscriptionService from "~/services/subscription";

export const subscriptionStore = defineStore("subscriptionStore", () => {
    const createSubscription = async (payload: any) => {
      let res = await subscriptionService.createSubscription(payload)
      return res.data
    } 
    return {
      createSubscription
    }
});
