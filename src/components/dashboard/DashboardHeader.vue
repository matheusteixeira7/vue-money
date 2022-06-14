<template>
  <header
    style="height: 12rem"
    :style="{ background: $vuetify.theme.themes.light.primary }"
    class="d-flex justify-space-between pa-6"
  >
    <div class="">
      <v-avatar color="secondary" size="36" class="mr-2">
        <v-icon color="white">mdi-currency-usd</v-icon>
      </v-avatar>
      <strong class="white--text">Dev Money</strong>
    </div>
    <v-btn color="accent" elevation-1 small>Nova transação</v-btn>
  </header>
</template>

<script lang="ts">
export default {};
</script>
