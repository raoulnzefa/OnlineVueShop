<template>
  <header
    class="bg-dark navbar navbar-dark navbar navbar-expand-lg sticky-top "
  >
    <div class="container">
      <div class="navbar-brand">
        <ImageComponent pathName="logo.svg" :localResource="true" />
      </div>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse mr-auto" id="navbarNav">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <HeaderLink Name="Home" Where="Home" />
          <HeaderLink
            Name="Computadores"
            Where="ProductsView"
            :Parametro="computadoresItems"
          />
          <HeaderLink
            Name="Seguridad"
            Where="ProductsView"
            :Parametro="seguridadItems"
          />
          <HeaderLink
            Name="Accesorios"
            Where="ProductsView"
            :Parametro="accesoriosItems"
          />
          <li class="nav-item ">
            <a href="/added/test.pdf" target="_blank" class="nav-link ">
              Precios
            </a>
          </li>
        </ul>
      </div>
      <div class="row">
        <form class="col-6 form-inline">
          <input
            type="search"
            class="form-control "
            placeholder="Search..."
            aria-label="Search"
          />
        </form>

        <button type="button" class="btn btn-outline-light me-2 my-sm-0 col">
          Buscar
        </button>
        <button type="button" class="btn btn-warning my-sm-0 col">
          Contactanos
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import HeaderLink from "./HeaderLinks.vue";
import ImageComponent from "../subComponents/ImageComponent.vue";
export default {
  name: "Header",
  components: {
    HeaderLink,
    ImageComponent,
  },
  data() {
    return {
      computadoresItems: { categoria: "computadores" },
      seguridadItems: { categoria: "seguridad" },
      accesoriosItems: { categoria: "accesorios" },
    };
  },
};
</script>

<style></style>
