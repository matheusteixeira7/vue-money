<template>
  <v-app :style="{ background: $vuetify.theme.themes.light.background }">
    <v-main>
      <DashboardHeader />
      <div class="main-cards">
        <div class="d-flex overflow-x-auto">
          <MainCard
            name="Entradas"
            :amount="
              transactions.reduce(
                (acc, transaction) =>
                  transaction.value > 0 ? acc + transaction.value : acc,
                0
              )
            "
            last-transaction="13 de abril"
            transaction-type="income"
          />
          <MainCard
            name="Saídas"
            :amount="
              transactions.reduce(
                (acc, transaction) =>
                  transaction.value < 0 ? acc + transaction.value : acc,
                0
              )
            "
            last-transaction="12 de abril"
            transaction-type="outcome"
          />
          <MainCard
            name="Total"
            :amount="
              transactions.reduce((total, transaction) => {
                return total + transaction.value;
              }, 0)
            "
            last-transaction="13 de abril"
            transaction-type=""
          />
        </div>

        <div class="pa-6 d-flex justify-space-between">
          <span>Listagem</span>
          <span>4 itens</span>
        </div>

        <TransactionsList
          v-for="transaction in transactions"
          :key="transaction.id"
          :title="transaction.title"
          :value="transaction.value"
          :type="transaction.type"
          :date="transaction.date"
        />
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

import DashboardHeader from "./components/dashboard/DashboardHeader.vue";
import MainCard from "./components/dashboard/MainCard.vue";
import TransactionsList from "./components/dashboard/TransactionsList.vue";

export default defineComponent({
  components: {
    MainCard,
    DashboardHeader,
    TransactionsList,
  },
  data() {
    return {
      transactions: [
        {
          id: 1,
          title: "Desenvolvimento de site",
          value: 13000,
          date: new Date().toLocaleDateString("pt-BR", {
            year: "2-digit",
            month: "numeric",
            day: "numeric",
          }),
          type: "Trabalho",
        },
        {
          id: 2,
          title: "Supermercado",
          value: -2000,
          date: new Date().toLocaleDateString("pt-BR", {
            year: "2-digit",
            month: "numeric",
            day: "numeric",
          }),
          type: "Casa",
        },
        {
          id: 3,
          title: "Prestação carro",
          value: -3000,
          date: new Date().toLocaleDateString("pt-BR", {
            year: "2-digit",
            month: "numeric",
            day: "numeric",
          }),
          type: "Automóvel",
        },
        {
          id: 4,
          title: "Rendimento de investimentos",
          value: 8000,
          date: new Date().toLocaleDateString("pt-BR", {
            year: "2-digit",
            month: "numeric",
            day: "numeric",
          }),
          type: "Investimentos",
        },
      ],
    };
  },
  // methods: {
  //   calculateIncome() {
  //     return this.transactions.reduce(
  //       (acc, transaction) => (transaction.value > 0 ? acc + transaction.value : acc),
  //       0
  //     );
  //   },
  //   calculateExpenses() {
  //     return this.transactions.reduce(
  //       (acc, transaction) => (transaction.value < 0 ? acc + transaction.value : acc),
  //       0
  //     );
  //   },
  //   calculateTotal() {
  //     return this.transactions.reduce((total, transaction) => {
  //       return total + transaction.value;
  //     }, 0);
  //   },
  // },
});
</script>

<style scoped>
.main-cards {
  transform: translateY(-90px);
}
</style>
