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
                {{ categoria.descripcion }}
              </p>
              <div class=" my-2 ">
                <ButtonC
                  bText="Ver Productos"
                  :iconButton="true"
                  iconChoosen="fa-heart-o"
                />
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
import ButtonC from "./subComponents/ButtonC.vue";
export default {
  components: {
    ButtonC,
  },
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
