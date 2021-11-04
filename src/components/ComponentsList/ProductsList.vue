<template>
  <div class="container">
    <ul class="list-group list-group-flush ">
      <li
        id="ItemsList"
        v-for="(producto, index) in productosUpdated"
        :key="index"
        class="list-group-item mt-2"
      >
        <CardList class="mt-2" :product="producto" />
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

<style>
#ItemsList {
  background-color: #eeeeee;
}
</style>
