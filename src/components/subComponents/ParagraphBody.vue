<template>
  <p class="card-text text-start">
    {{ pBody }}
  </p>
</template>

<script>
export default {
  props: {
    pBody: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
