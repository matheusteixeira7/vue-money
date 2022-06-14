<template>
  <div class="px-6 main-card">
    <v-card
      width="300"
      :style="{ background: $vuetify.theme.themes.light.white }"
      class="pa-6"
    >
      <header class="d-flex justify-space-between mb-6">
        <span
          class="font-weight-regular text-body-2"
          :style="{ color: $vuetify.theme.themes.light.titles }"
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
          :style="{ color: $vuetify.theme.themes.light.titles }"
        >
          {{ amount }}
        </span>
        <span
          class="font-weight-regular last-transaction"
          :style="{ color: $vuetify.theme.themes.light.text }"
        >
          Última entrada dia {{ lastTransaction }}
        </span>
      </main>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
export default defineComponent({
data() {
  return {}
},
props: {
  name: {
    type: String,
    required: true
  },
  amount: {
    type: String,
    required: true
  },
  lastTransaction: {
    type: String,
    required: true
  },
  transactionType: {
    type: String,
    required: true,
  }
},
computed: {
  getColor() {
    if (this.transactionType === 'income') {
      return 'secondary'
    } else if (this.transactionType === 'outcome') {
      return 'error'
    } else {
      return 'alert'
    }
  },
  getIcon() {
    if (this.transactionType === 'income') {
      return 'mdi-arrow-up-circle-outline'
    } else if (this.transactionType === 'outcome') {
      return 'mdi-arrow-down-circle-outline'
    } else {
      return 'mdi-alert-circle-outline'
    }
  }
}

})
</script>

<style scoped>
.main-card {
  transform: translateY(-50%);
}

.amount {
  font-size: 2rem;
  font-weight: bold;
}

.last-transaction {
  font-size: 0.8rem;
}
</style>
