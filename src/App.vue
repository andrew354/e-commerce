<template>
  <v-app>
    <!-- <router-view></router-view> -->
    <!-- <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>-->
    <app-header></app-header>
    <v-content>
      <router-view/>
      <!-- <app-products/> -->
    </v-content>
  </v-app>
</template>

<script>
import axios from "axios";
import Product from "./components/Product";
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    "app-product": Product,
    "app-header": Header
  },
  data() {
    return {};
  }
};
</script>
