<template>
  <div class="container">
    <ul class="list-group my-5">
      <li
        v-for="(producto, index) in productosUpdated"
        :key="index"
        class="list-group-item"
      >
        <CardList :product="producto" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";
import CardList from "./CardList.vue";
export default {
  name: "ProductsList",
  components: {
    CardList,
  },
  props: {
    categoria: {
      type: String,
      default: "",
    },
  },
  methods: {
    ...mapActions([
      "cargarJsonComputer",
      "cargarJsonSeguridad",
      "cargarJsonPartes",
    ]),
  },
  created() {},
  computed: {
    ...mapState(["productos"]),
    productosUpdated() {
      console.log(this.categoria);
      if (this.categoria === "computadores") {
        this.cargarJsonComputer();
      }
      if (this.categoria === "seguridad") {
        this.cargarJsonSeguridad();
      }
      if (this.categoria === "accesorios") {
        this.cargarJsonPartes();
      }
      return this.productos;
    },
  },
};
</script>

<style></style>
