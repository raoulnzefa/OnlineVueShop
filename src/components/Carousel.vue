<template>
  <div class="m-0">
    <b-carousel
      controls
      indicators
      v-model="slide"
      :interval="3500"
      background="#e1e1e1"
      img-width="1024"
      img-height="800"
      @sliding-end="endSlide"
      @sliding-start="initCarousel"
      style="text-shadow: 2px 3px 3px #222222; "
    >
      <b-carousel-slide
        text="Los mejores precios y la mejor calidad"
        caption="PORTATILES MULTI USO"
        img-src="https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80"
        style="object-fit: cover; max-height: 80vh;"
      >
        <ButtonC bText="Ver los productos" :iconButton="true" />
      </b-carousel-slide>

      <b-carousel-slide
        text="Los mejores precios y la mejor calidad"
        caption="IMPRESORAS Y ACCESORIOS"
        img-src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcHV0ZXJzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        style="object-fit: cover; max-height: 80vh;"
      >
        <ButtonC bText="Ver los productos" :iconButton="true" />
      </b-carousel-slide>

      <b-carousel-slide
        text="Los mejores precios y la mejor calidad"
        caption="TECLADOS Y ACCESORIOS"
        img-src="https://images.unsplash.com/photo-1598624443973-2aa79a646a1e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGNvbXB1dGVyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        style="object-fit: cover; max-height: 80vh;"
      >
        <ButtonC bText="Ver los productos" :iconButton="true" />
      </b-carousel-slide>
      <b-carousel-slide
        text="Los mejores precios y la mejor calidad"
        caption="CAMARAS Y ARTICULOS SEGURIDAD"
        img-src="https://images.unsplash.com/photo-1496368077930-c1e31b4e5b44?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtYXJhcyUyMHNlY3VyaXR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=90"
        style="object-fit: cover; max-height: 80vh;"
      >
        <ButtonC bText="Ver los productos" :iconButton="true" />
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
import ButtonC from "./subComponents/ButtonC.vue";

export default {
  components: {
    ButtonC,
  },
  name: "Carousel",
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    initCarousel() {
      this.sliding = true;
    },
    endSlide() {
      this.sliding = false;
    },
  },
};
</script>
