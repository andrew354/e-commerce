<template>
  <div class="myFlex" id="products">
    <div>
      <div class="search">
        <input placeholder="Search product" v-model="search">
      </div>
      <div class="myFlex">
        <div class="card-container myFlex" v-for="(product,i) in filteredProducts" :key="i">
          <div class="card">
            <div class="front">
              <img class="imgDimension" v-bind:src="product.images[0].url">
              <h2>{{product.title}}</h2>
              <h4>{{product.subtitle}}</h4>
              <h2>{{product.price}} {{product.currency}}</h2>
              <v-btn color="info">Add To Cart</v-btn>
            </div>
            <!-- <div class="back">
              <h2>{{product.title}}{{product.subtitle}}</h2>
              <p>{{product.description}}</p>
            </div>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["products"],
  data() {
    return {
      search: "",
      cat: "Laptop"
    };
  },
  computed: {
    filteredProducts: function() {
      return this.products.filter(product => {
        let search =
          product.title.toLowerCase().match(this.search.toLowerCase()) ||
          product.description.toLowerCase().match(this.search.toLowerCase());
        let category = product.category == this.cat;
        return search && category;
      });
    }
  }
};
</script>
<style scoped>
body {
  height: 100%;
}

.imgDimension {
  width: 210px;
  height: 240px;

  /* width: 228px;
  height: 348px; */
}

.card-container {
  perspective: 500px;
}

/* .card-container:hover .card {
  transform: rotateY(180deg);
} */

.card {
  transition: transform 0.7s;
  transform-style: preserve-3d;
}

.front,
.back {
  backface-visibility: hidden;
}

.back {
  transform: rotateY(180deg);
}

/*Custom Styles
.cards-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
} */

.card {
  width: 230px;
  height: 350px;
  margin: 10px;
}

.front,
.back {
  box-shadow: 0 1px 6px 0;
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
}

.myFlex {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 3%;
}

p {
  color: black;
  text-align: center;
  margin: 5px;
  margin-top: 10px;
}

div h3 {
  text-align: center;
  color: blue;
  margin-top: 15px;
  text-shadow: 2px 2px 1px black;
}

.space {
  margin-top: 30px;
}

.logo img {
  width: 350px;
  height: 350px;
}

.myFlex2 {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.noseque {
  background-color: yellow;
  width: 100%;
  height: 100px;
  top: 0px;
}

.search {
  align-self: center;
}

.noseque2 {
  background-color: rgb(8, 8, 59);
  width: 100%;
  height: 100px;
  bottom: 0px;
}

.noseque2 p {
  color: white;
}

.backLayout {
  background-color: black;
  color: white;
}

h1 {
  text-shadow: 2px 2px 1px white;
}
</style>





// <v-layout>
//     <v-flex xs12 sm6 offset-sm3>
//       <v-card>
//         <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>

//         <v-card-title primary-title>
//           <div>
//             <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
//             <div>{{ product.description }}</div>
//           </div>
//         </v-card-title>

//         <v-card-actions>
//           <v-btn flat color="orange">Share</v-btn>
//           <v-btn flat color="orange">Explore</v-btn>
//         </v-card-actions>
//       </v-card>
//     </v-flex>
//   </v-layout>