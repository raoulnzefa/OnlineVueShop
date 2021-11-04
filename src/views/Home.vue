<template>
  <div>
    <Header></Header>
    <ButtonW></ButtonW>
    <Carousel></Carousel>
    <Menulist> </Menulist>
    <CategoriasPart></CategoriasPart>
    <ServiciosPart></ServiciosPart>
    <FooterPage></FooterPage>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header/Header.vue";
import Carousel from "@/components/Carousel.vue";
import Menulist from "@/components/Menulist.vue";
import CategoriasPart from "@/components/CategoriasPart.vue";
import ServiciosPart from "@/components/ServiciosPart.vue";
import ButtonW from "@/components/ButtonW.vue";
import FooterPage from "@/components/Footer/FooterPage.vue";
import { mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    Header,
    Carousel,
    Menulist,
    CategoriasPart,
    ServiciosPart,
    ButtonW,
    FooterPage,
  },
  methods: {
    ...mapActions(["cargarJsonProductos"]),
  },
  created() {
    this.cargarJsonProductos();
  },
};
</script>
<style></style>
