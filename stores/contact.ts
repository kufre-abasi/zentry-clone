import { defineStore } from "pinia";
import * as contactService from "~/services/contact";

export const contactStore = defineStore("contactStore", () => {
    const createContact = async (payload: any) => {
      let res = await contactService.createContact(payload)
      return res.data
    }


    return {
      createContact
    }
});
