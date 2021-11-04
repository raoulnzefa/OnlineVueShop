<template>
  <div>
    <div class="card mb-3">
      <img
        class="card-img-top"
        style=" height: 35rem; object-fit: cover;"
        :src="product.foto"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">{{ product.nombre }}</h5>
        <p class="card-text">
          {{ product.Descripcion }}
        </p>
        <p class="card-text">
          <small class="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardList",
  props: {
    product: {
      type: Object,
      default: {
        id: "",
        nombre: "",
        Descripcion: "",
        categoria: "",
        marca: "",
        precio: "",
        estado: "",
        foto: "",
      },
    },
  },
};
</script>

<style></style>
