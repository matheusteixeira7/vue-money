<template>
  <v-app :style="{ background: $vuetify.theme.themes.light.background }">
    <v-main>
      <DashboardHeaderVue />
      <MainCardVue
        name="Entradas"
        amount="R$ 17.400,00"
        last-transaction="13 de abril"
        transactionType="income"
      />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import DashboardHeaderVue from './components/dashboard/DashboardHeader.vue';
import MainCardVue from './components/dashboard/MainCard.vue';

export default {
  components: {
    MainCardVue,
    DashboardHeaderVue,
  },
};
</script>
