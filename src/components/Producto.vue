<template>
  <div id="all" class="m-2">
    <div class="container my-4 ">
      <p class="fs-1 fw-bolder text-start">Catalogo</p>
      <div class=" row ">
        <div
          v-for="(producto, index) in productos"
          :key="index"
          class="col-sm-4"
        >
          <div class="card my-2" style=" ">
            <div class="m-2">
              <img
                src="https://picsum.photos/1024/480/?image=58"
                class="card-img-top"
                style=" height: 20rem; object-fit: cover;"
                alt="..."
              />
            </div>
            <div class="card-body  m-0 p-2">
              <h5 class="card-title text-start ">
                <span>{{ producto.marca }} </span>
              </h5>
              <p class="card-text text-start">
                Some quick ecccxample text to build on the card title and make
                up the bulk of the card's content.
              </p>
              <div class=" m-2 d-flex justify-content-between">
                <p>
                  <strong><span> prince:</span></strong> 3.00
                </p>
                <a href="#" class="btn  btn-primary" style="width: 200px;"
                  >Go somewhere</a
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
  name: "Producto",
  computed: {
    ...mapState(["productos"]),
  },
  methods: {
    ...mapActions(["cargarJsonData"]),
  },
  created() {
    this.cargarJsonData();
  },
};
</script>

<style>
#cardItem {
  background-color: #dbdbdb;
}
</style>
