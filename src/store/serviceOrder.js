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
      cep: '',
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
    discount_type: 'R$',
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
  getters: {
    subTotal: (state) => {
      return state.services.reduce((total, service) => {
        return total + (Number(service.price) * Number(service.quantity));
      }, 0);
    },

    total: (state) => {
      if (state.discount_type === 'R$') {
        return state.subTotal - state.discount;
      }

      if (state.discount_type === '%') {
        return state.subTotal - (state.subTotal * (state.discount / 100));
      }

      return state.subTotal
    }
  }
});
