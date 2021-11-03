<template>
  <header
    class="bg-dark navbar navbar-dark navbar navbar-expand-lg sticky-top "
  >
    <div class="container">
      <div class="navbar-brand">
        <img src="../assets/logo.svg" alt="logos company" />
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
          <li class="nav-item active ">
            <router-link
              class="nav-link"
              :to="{
                name: 'Home',
              }"
              >Home</router-link
            >
          </li>
          <li class="nav-item ">
            <router-link
              class="nav-link"
              :to="{
                name: 'ProductsView',
                params: { categoria: computadoresItems },
              }"
              >Computadores</router-link
            >
          </li>
          <li class="nav-item ">
            <router-link
              class="nav-link"
              :to="{
                name: 'ProductsView',
                params: { categoria: seguridadItems },
              }"
              >Seguridad</router-link
            >
          </li>
          <li class="nav-item ">
            <router-link
              class="nav-link"
              :to="{
                name: 'ProductsView',
                params: { categoria: accesoriosItems },
              }"
              >Accesorios</router-link
            >
          </li>
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
export default {
  name: "Header",
  data() {
    return {
      computadoresItems: "computadores",
      seguridadItems: "seguridad",
      accesoriosItems: "accesorios",
    };
  },
};
</script>

<style></style>
