<template>
  <div class="px-6">
    <v-card elevation="0" class="d-flex flex-column pa-4 mb-2">
      <span class="text-body-2">{{ title }}</span>
      <span
        class="text-h6 mb-6"
        :style="{
          color:
            value < 0
              ? $vuetify.theme.themes.light.error
              : $vuetify.theme.themes.light.secondary,
        }"
      >
        {{
          value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })
        }}
      </span>

      <div class="d-flex justify-space-between">
        <span class="text-body-2" :style="{ color: $vuetify.theme.themes.light.text }">
          {{ type }}
        </span>
        <span class="text-body-2" :style="{ color: $vuetify.theme.themes.light.text }">
          {{ date }}
        </span>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
});
</script>
