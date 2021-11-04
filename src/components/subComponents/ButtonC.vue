<template>
  <button href="#" :class="'btn btn-' + buttonType">
    <i class="me-1" v-bind:class="'fa ' + iconChoosen" v-if="iconButton"></i>
    {{ bText }}
  </button>
</template>

<script>
export default {
  name: "ButtonC",
  props: {
    bText: {
      type: String,
      default: "",
    },
    iconChoosen: {
      type: String,
      default: "",
    },
    iconButton: {
      type: Boolean,
      default: false,
    },
    buttonType: {
      type: String,
      default: "primary",
    },
  },
};
</script>

<style></style>
