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
        <div class="d-flex justify-content-between align-items-center">
          <p class="card-text ">
            <small class="text-muted ">Last updated 3 mins ago</small>
          </p>
          <div class="mr-auto ">
            <ButtonC
              bText="Informacion"
              :iconButton="true"
              iconChoosen="fa-info"
              class="me-2"
              buttonType="light"
            />
            <ButtonC
              bText="Comprar"
              :iconButton="true"
              iconChoosen="fa-heart-o"
              buttonType="primary"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonC from "../subComponents/ButtonC.vue";

export default {
  components: {
    ButtonC,
  },
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
