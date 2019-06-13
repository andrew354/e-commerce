<template>
  <div>
    <div class="search">
      <input placeholder="Search product" v-model="search">
    </div>
    <div class="myFlex">
      <app-product
        v-for="(productData, index) in filteredProducts"
        :key="index"
        :product="productData"
      ></app-product>
      <!-- <app-smartphone v-bind:productsData="productsData"></app-smartphone> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Product from "../components/Product";
// import Smartphone from "../components/Smartphone";

export default {
  components: {
    "app-product": Product
    // "app-smartphone": Smartphone
  },
  data() {
    return {
      productsData: [],
      search: ""
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios.get("https://api.myjson.com/bins/p5az3").then(response => {
        console.log(response);
        this.productsData = response.data.products;
      });
    }
  },
  computed: {
    filteredProducts: function() {
      return this.productsData.filter(product => {
        let search =
          product.title.toLowerCase().match(this.search.toLowerCase()) ||
          product.description.toLowerCase().match(this.search.toLowerCase());
        return search;
      });
    }
  }
};
</script>


<style scoped>
.myFlex {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 3%;
}
</style>
