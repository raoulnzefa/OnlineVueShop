<template>
  <div id="all" class="">
    <div class="container  ">
      <div class=" row ">
        <div
          v-for="(servicio, index) in servicios"
          :key="index"
          class="col-sm-4"
        >
          <div id="cardItemServices" class="card my-2" style=" ">
            <div class="m-2">
              <img
                :src="servicio.url"
                class="card-img-top"
                style=" height: 20rem; object-fit: cover;"
                alt="..."
              />
            </div>
            <div class="card-body  m-0 p-2">
              <h5 class="card-title text-start ">
                <span>{{ servicio.name }} </span>
              </h5>
              <p class="card-text text-start">
                Some quick ecccxample text to build on the card title and make
                up the bulk of the card's content.
              </p>
              <div class=" m-2 d-flex justify-content-end">
                <a href="#" class="btn  btn-primary" style="width: 200px;"
                  >Contactar</a
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
  name: "Servicio",
  computed: {
    ...mapState(["servicios"]),
  },
  methods: {
    ...mapActions(["cargarJsonServicios"]),
  },
  created() {
    this.cargarJsonServicios();
  },
};
</script>

<style>
#cardItemServices {
  background-color: #ffffff;
}
</style>
