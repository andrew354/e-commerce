<template>
  <div>
    <v-toolbar>
      <img src="@/assets/img/shoppongCart.png">
      <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
      <v-toolbar-title>BroKatech Store</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>
          <router-link to="/Allproducts">All Products</router-link>
        </v-btn>
        <v-btn flat>
          <router-link to="/AllSmartphone">Smartphone</router-link>
        </v-btn>

        <v-btn flat>Laptop</v-btn>
        <v-btn flat>Tablet</v-btn>
        <v-btn flat>Accessories</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>
<script>
export default {
  // props: ["products"]
  // data() {
  //   return {
  //     selected: []
  //   };
  // },
  // computed: {
  //   filtered() {
  //     return this.products.filter(product => {
  //       return this.selected.every(sel => product[sel] === true);
  //     });
  //   }
  // }
};
</script>
<style scoped>
img {
  width: 35px;
  height: 35px;
}
</style>
