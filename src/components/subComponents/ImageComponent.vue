<template>
  <div>
    <img
      :src="resolve_img_url"
      :class="classParamter"
      :style="styleParameter"
    />
  </div>
</template>

<script>
export default {
  name: "ImageComponent",
  props: {
    localResource: {
      type: Boolean,
      default: false,
    },
    pathName: {
      type: String,
      default: "logo.svg",
    },
    classParamter: {
      type: String,
      default: "",
    },
    styleParameter: {
      type: String,
      default: "",
    },
  },
  computed: {
    resolve_img_url() {
      if (this.localResource) {
        return require(`@/assets/${this.pathName}`);
      } else {
        return this.pathName;
      }
    },
  },
};
</script>

<style></style>
