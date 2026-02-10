import { defineStore } from "pinia";

export const useServiceOrderStore = defineStore('serviceOrder', {
  state: () => ({
    orderDetails: {
      number: '',
      date: new Date().toISOString().substr(0, 10),
      status: 'Aberta'
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
    },
    gerarOsServiceOrder () {
      const orderFinally = {
        ...this.orderDetails,
        client: this.client,
        services: this.services,
        description: this.description,
        discount_type: this.discount_type,
        discount: this.discount,
        subTotal: this.subTotal,
        total: this.total
      }
      console.log('Gerar Ordem de Serviço', orderFinally)
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
