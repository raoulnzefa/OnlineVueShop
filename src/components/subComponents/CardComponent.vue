<template>
  <div id="cardItemServices " class="card pb-4" style=" height: 36rem; ">
    <div class="m-2">
      <ImageComponent
        :pathName="servicio.url"
        classParamter="card-img-top"
        styleParameter=" height: 20rem; object-fit: cover;"
      />
    </div>
    <div class="card-body">
      <TitleBody :title="servicio.name" />
      <ParagraphBody :pBody="servicio.descripcion" />
    </div>

    <ButtonC
      :bText="buttonText"
      :iconButton="true"
      iconChoosen="fa-info-circle"
      class="mt-auto mx-2"
    />
  </div>
</template>

<script>
import ButtonC from "../subComponents/ButtonC.vue";
import ImageComponent from "@/components/subComponents/ImageComponent.vue";
import TitleBody from "@/components/subComponents/TitleBody.vue";
import ParagraphBody from "@/components/subComponents/ParagraphBody.vue";

export default {
  name: "CardComponent",
  components: {
    ButtonC,
    ImageComponent,
    TitleBody,
    ParagraphBody,
  },
  props: {
    servicio: {
      type: Object,
    },
    buttonText: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
