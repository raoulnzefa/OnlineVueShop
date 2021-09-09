<template>
  <div id="servicios">
    <div class="container py-4">
      <div style=" ">
        <div class="row d-flex justify-content-evenly">
          <h2
            class="col-sm-2 my-4 align-self-center"
            style="color: #393E45; font-size: 70px;"
          >
            Servicios
          </h2>
          <img
            class="col-sm-3 col"
            src="../assets/servicios.svg"
            alt="logos company"
          />
          <Servicio></Servicio>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Servicio from "@/components/Servicio.vue";

export default {
  name: "ServiciosPart",
  components: {
    Servicio,
  },
};
</script>
<style>
#servicios {
  background-color: #eeeeee;
}
</style>
