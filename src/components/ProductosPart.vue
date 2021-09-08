<template>
  <div class="container">
    <div
      class="d-flex align-content-start flex-wrap my-4 "
      style="text-shadow: 2px 3px 3px #B2B2B2; "
    >
      <img class="sm-4" src="../assets/productos.svg" alt="logos company" />
      <h2
        class="sm-4 my-4 align-self-center"
        style="color: #393E45; font-size: 110px;"
      >
        Productos
      </h2>
    </div>
    <Producto></Producto>
  </div>
</template>

<script>
import Producto from "@/components/Producto.vue";

export default {
  name: "ProductosPart",
  components: {
    Producto,
  },
};
</script>

<style></style>
