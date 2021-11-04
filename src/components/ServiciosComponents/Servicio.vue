<template>
  <div class="container">
    <div class=" row ">
      <div v-for="(servicio, index) in servicios" :key="index" class="col-sm-4">
        <CardComponent :servicio="servicio" buttonText="Contactar" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";

import CardComponent from "@/components/subComponents/CardComponent.vue";

export default {
  components: {
    CardComponent,
  },
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
