import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {
      name: '' as string,
      surname: '' as string,
      question: '' as string,
      income: null as number | null,
      expenses: null as number | null,
      cardLastDigits: null as string | null,
      cardBank: null as string | null,
    },
  }),
  actions: {
    setUser(data: { name: string; surname: string }) {
      this.user.name = data.name;
      this.user.surname = data.surname;
    },
    setCard(data: { cardLastDigits: string; cardBank: string }) {
      this.user.cardLastDigits = data.cardLastDigits;
      this.user.cardBank = data.cardBank;
    },
  },
});
