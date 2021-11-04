<template>
  <h5 class="card-title text-uppercase ">
    <span>{{ title }} </span>
    <hr />
  </h5>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
