<template>
  <v-app :style="{ background: $vuetify.theme.themes.light.background }">
    <v-main>
      <DashboardHeaderVue />
      <div class="main-cards">
        <div class="d-flex overflow-x-auto">
          <MainCardVue
            name="Entradas"
            amount="R$ 17.400,00"
            last-transaction="13 de abril"
            transaction-type="income"
          />
          <MainCardVue
            name="Saídas"
            amount="R$ 15.400,00"
            last-transaction="12 de abril"
            transaction-type="outcome"
          />
          <MainCardVue
            name="Total"
            amount="R$ 17.400,00"
            last-transaction="13 de abril"
            transaction-type=""
          />
        </div>
        <TransactionsListVue />
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import DashboardHeaderVue from "./components/dashboard/DashboardHeader.vue";
import MainCardVue from "./components/dashboard/MainCard.vue";
import TransactionsListVue from "./components/dashboard/TransactionsList.vue";

export default {
  components: {
    MainCardVue,
    DashboardHeaderVue,
    TransactionsListVue,
  },
};
</script>

<style scoped>
.main-cards {
  transform: translateY(-90px);
}
</style>
