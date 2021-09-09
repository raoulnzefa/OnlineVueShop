<template>
  <div class="container py-4">
    <div style="">
      <div class="row d-flex justify-content-evenly">
        <img
          class="col-sm-3 col"
          src="../assets/productos.svg"
          alt="logos company"
        />
        <h2
          class="col-sm-2 my-4 align-self-center "
          style="color: #393E45; font-size: 70px;"
        >
          Categorias
        </h2>
        <Categoria></Categoria>
      </div>
    </div>
  </div>
</template>

<script>
import Categoria from "@/components/Categoria.vue";

export default {
  name: "CategoriasPart",
  components: {
    Categoria,
  },
};
</script>

<style></style>
