<template>
  <div id="component">
    <div class="container pt-4">
      <b-row>
        <b-col cols="12">
          <Carousel :perPage="4">
            <Slide
              class="p-2"
              v-for="(producto, index) in productos"
              :key="index"
            >
              <div class="card" id="cardItemList" style="width: 18rem;">
                <img
                  :src="producto.foto"
                  style=" height: 10rem; object-fit: cover;"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">{{ producto.nombre }}</h5>
                  <p class="card-text">
                    {{ producto.Descripcion }}
                  </p>
                  <ButtonC
                    bText="Ver Producto"
                    iconButton="true"
                    iconChoosen="fa-check-square"
                  />
                </div>
              </div>
            </Slide>
          </Carousel>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import { mapState } from "vuex";
import { mapActions } from "vuex";
import ButtonC from "./subComponents/ButtonC.vue";
export default {
  name: "Menulist",
  components: {
    Carousel,
    Slide,
    ButtonC,
  },
  data: function() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  computed: {
    ...mapState(["productos"]),
  },
  methods: {
    ...mapActions(["cargarJsonProductos"]),
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    created() {
      this.cargarJsonProductos();
    },
  },
};
</script>

<style>
#component {
  background-color: #ffc855;
}
#cardItemList {
  background-color: #ffeabe;
}
</style>
