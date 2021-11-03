<template>
  <div>
    <Header></Header>
    <ProductsList />
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
};
</script>

<style></style>
