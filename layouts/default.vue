<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" elevation="0">
      <v-list-item
        title="My App"
        subtitle=""
        to="/"
        :min-height="65"
        color="primary"
      ></v-list-item>
      <v-divider></v-divider>
      <v-list :lines="false" nav>
        <v-list-item
          v-for="(menu, i) in menus"
          :key="i"
          :value="menu"
          :to="menu.url"
          :min-height="55"
          color="primary"
        >
          <template #prepend>
            <v-icon :icon="menu.icon"></v-icon>
          </template>
          <v-list-item-title v-text="menu.name"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar elevation="0">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Application</v-app-bar-title>
    </v-app-bar>

    <v-main style="background-color: rgb(248, 248, 248)">
      <div class="tw-px-40 pt-5">
        <slot />
      </div>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";

type Menu = {
  id: Number;
  name: String;
  url: String;
  icon: String;
};

const drawer = ref(true);
const menus = ref<Menu[]>([
  { id: 1, name: "顧客情報", url: "/customers", icon: "mdi-account-group" },
  { id: 2, name: "衣装情報", url: "/costumes", icon: "mdi-camera-gopro" },
]);
</script>
