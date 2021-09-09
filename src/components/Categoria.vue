<template>
  <div id="categories" class="">
    <div class="container  ">
      <div class=" row ">
        <div
          v-for="(categoria, index) in categorias"
          :key="index"
          class="col-sm-4"
        >
          <div id="cardItem" class="card my-2" style=" ">
            <div class="m-2">
              <img
                :src="categoria.url"
                class="card-img-top"
                style=" height: 20rem; object-fit: cover;"
                alt="..."
              />
            </div>
            <div class="card-body container m-0 p-2">
              <h5 class="card-title text-start ">
                <span>{{ categoria.name }} </span>
              </h5>
              <p class="card-text text-start">
                Some quick ecccxample text to build on the card title and make
                up the bulk of the card's content.
              </p>
              <div class=" m-2 ">
                <a href="#" class="btn  btn-primary" style="width: 200px;"
                  >Ver productos</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "Categoria",
  computed: {
    ...mapState(["categorias"]),
  },
  methods: {
    ...mapActions(["cargarJsonCategorias"]),
  },
  created() {
    this.cargarJsonCategorias();
  },
};
</script>

<style>
#cardItem {
  background-color: #ffffff;
}
</style>
