<template>
  <div>
    <Header></Header>
    <Carousel></Carousel>
    <Menulist></Menulist>
    <ProductosPart></ProductosPart>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Carousel from "@/components/Carousel.vue";
import Menulist from "@/components/Menulist.vue";
import ProductosPart from "@/components/ProductosPart.vue";

export default {
  name: "Home",
  components: {
    Header,
    Carousel,
    Menulist,
    ProductosPart,
  },
};

/*<div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>*/
</script>
