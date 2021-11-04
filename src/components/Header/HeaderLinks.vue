<template>
  <li class="nav-item active ">
    <router-link
      class="nav-link"
      :to="{
        name: Where,
        params: Parametro,
      }"
      >{{ Name }}</router-link
    >
  </li>
</template>

<script>
export default {
  props: {
    Where: {
      type: String,
      default: "Home",
    },
    Name: {
      type: String,
      default: "",
    },
    Parametro: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style></style>
