<template>
  <div class="px-6">
    <v-card
      elevation="0"
      width="300"
      :style="{ background: changeCardBgColor }"
      class="pa-6"
    >
      <header class="d-flex justify-space-between mb-6">
        <span
          class="font-weight-regular text-body-2"
          :style="{ color: changeTextColor }"
        >
          {{ name }}
        </span>
        <div>
          <v-icon :color="getColor" large>{{ getIcon }}</v-icon>
        </div>
      </header>

      <main class="d-flex flex-column">
        <span
          class="font-weight-medium amount"
          :style="{ color: changeTextColor }"
        >
          {{ amount }}
        </span>
        <span
          class="font-weight-regular last-transaction"
          :style="{ color: changeLastTransactionTextColor }"
        >
          Última entrada dia {{ lastTransaction }}
        </span>
      </main>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    lastTransaction: {
      type: String,
      required: true,
    },
    transactionType: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    getColor() {
      if (this.transactionType === 'income') {
        return 'secondary';
      } else if (this.transactionType === 'outcome') {
        return 'error';
      } else {
        return 'white';
      }
    },
    getIcon() {
      if (this.transactionType === 'income') {
        return 'mdi-arrow-up-circle-outline';
      } else if (this.transactionType === 'outcome') {
        return 'mdi-arrow-down-circle-outline';
      } else {
        return 'mdi-currency-usd';
      }
    },
    changeCardBgColor() {
      if (this.transactionType === 'income') {
        return this.$vuetify.theme.themes.light.white;
      } else if (this.transactionType === 'outcome') {
        return this.$vuetify.theme.themes.light.white;
      } else {
        return this.$vuetify.theme.themes.light.secondary;
      }
    },
    changeTextColor() {
      if (this.transactionType === 'income') {
        return this.$vuetify.theme.themes.light.titles;
      } else if (this.transactionType === 'outcome') {
        return this.$vuetify.theme.themes.light.titles;
      } else {
        return this.$vuetify.theme.themes.light.white;
      }
    },
    changeLastTransactionTextColor() {
      if (this.transactionType === 'income') {
        return this.$vuetify.theme.themes.light.text;
      } else if (this.transactionType === 'outcome') {
        return this.$vuetify.theme.themes.light.text;
      } else {
        return this.$vuetify.theme.themes.light.white;
      }
    },
  },
});
</script>

<style scoped>
.amount {
  font-size: 2rem;
  font-weight: bold;
}

.last-transaction {
  font-size: 0.8rem;
}
</style>
