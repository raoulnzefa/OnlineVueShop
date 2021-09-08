<template>
  <div id="component">
    <Producto></Producto>
  </div>
</template>

<script>
import Producto from "@/components/Producto.vue";

export default {
  name: "Menulist",
  components: {
    Producto,
  },
};
</script>

<style>
#component {
  background-color: #ffd378;
}
</style>
