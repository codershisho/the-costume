<template>
  <div class="font-bold">abbb</div>
  <v-btn color="primary">aaa</v-btn>
  <ul>
    <li v-for="task in tasks" :key="task.id">{{ task.task }}</li>
  </ul>
</template>

<script setup lang="ts">
import { VBtn } from "vuetify/lib/components/index.mjs";

const { data: tasks } = useFetch("/api/task");
</script>
