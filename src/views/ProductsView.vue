<template>
  <div id="component">
    <Header></Header>
    <div class="container my-5">
      <h1 class="text-uppercase">{{ categoriaParameter }}</h1>
    </div>
    <ProductsList :categoria="categoriaParameter" />
    <FooterPage></FooterPage>
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import FooterPage from "@/components/Footer/FooterPage.vue";
import ProductsList from "@/components/ComponentsList/ProductsList.vue";
export default {
  name: "ProductsView",
  components: {
    Header,
    FooterPage,
    ProductsList,
  },
  data() {
    return {
      parameter: "",
    };
  },
  computed: {
    categoriaParameter() {
      this.parameter = this.$route.params.categoria;
      return this.parameter;
    },
  },
};
</script>

<style>
#component {
  background-color: #ffc855;
}
</style>
