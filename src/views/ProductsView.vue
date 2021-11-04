<template>
  <div>
    <Header></Header>
    <div class="container my5">
      <h1>{{ categoriaParameter }}</h1>
    </div>
    <ProductsList :categoria="categoriaParameter" />
    <FooterPage></FooterPage>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import FooterPage from "@/components/FooterPage.vue";
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

<style></style>
