import { defineStore } from "pinia";

export const useServiceOrderStore = defineStore('serviceOrder', {
  state: () => ({
    orderDetails: {
      number: '333',
      date: '',
      status: ''
    },
    client: {
      name: '',
      email: '',
      phone: '',
      address: '',
      cpf: ''
    },
    services: [
      {
        description: '',
        quantity: 1,
        price: 0
      }
    ],
    description: '',
    discount_type: '',
    discount: 0
  }),
  actions: {
    addService () {
      this.services.push({
        description: '',
        quantity: 1,
        price: 0
      });
    },
    removeService (idx) {
      this.services.splice(idx, 1);
    }
  },
  getters: {}
});
