<template>
  <div class="pa-6">
    <div class="d-flex justify-space-between mb-6">
      <span>{{ calculateExpenses }}</span>
      <span>4 itens</span>
    </div>

    <v-card
      v-for="transaction in transactions"
      :key="transaction.id"
      elevation="0"
      class="d-flex flex-column pa-5 mb-2"
    >
      <span class="text-body-2">{{ transaction.title }}</span>
      <span
        class="text-h6 mb-6"
        :style="{
          color:
            transaction.value < 0
              ? $vuetify.theme.themes.light.error
              : $vuetify.theme.themes.light.secondary,
        }"
      >
        {{
          transaction.value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })
        }}
      </span>

      <div class="d-flex justify-space-between">
        <span class="text-body-2" :style="{ color: $vuetify.theme.themes.light.text }">
          {{ transaction.type }}
        </span>
        <span class="text-body-2" :style="{ color: $vuetify.theme.themes.light.text }">
          {{ transaction.date }}
        </span>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  data() {
    return {
      transactions: [
        {
          id: 1,
          title: "Desenvolvimento de site",
          value: 12000,
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
  computed: {
    calculateIncome() {
      return this.transactions.reduce(
        (acc, transaction) => (transaction.value > 0 ? acc + transaction.value : acc),
        0
      );
    },
    calculateExpenses() {
      return this.transactions.reduce(
        (acc, transaction) => (transaction.value < 0 ? acc + transaction.value : acc),
        0
      );
    },
    calculateTotal() {
      return this.transactions.reduce((total, transaction) => {
        return total + transaction.value;
      }, 0);
    },
  },
});
</script>
