import Vue from 'vue'
import Vuex from 'vuex'
import productData from "@/utils/products.json";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    servicios: [],
    categorias: [],
    productos: [],
    producto: {
      nombre: '',
      marca: '',
      descripcion: 'computador portat',
      categorias: [],
      estado: '',
    },
  },
  mutations: {
    cargarProductos(state, payload) {
      state.productos = payload;
    },
    cargarCategorias(state, payload) {
      state.categorias = payload;
    },
    cargarServicios(state, payload) {
      state.servicios = payload;
    },
  },
  actions: {
    cargarJsonProductos({ commit, state }, usuario) {
      const res = productData
      var listProducts = res.computadores.concat(res.camaras, res.partes)
      commit('cargarProductos', listProducts)
    },
    cargarJsonCategorias({ commit, state }, usuario) {
      const res = productData
      var listCategorias = res.categorias
      commit('cargarCategorias', listCategorias)
    },
    cargarJsonServicios({ commit, state }, usuario) {
      const res = productData
      var listServicios = res.servicios
      commit('cargarServicios', listServicios)
    },
  },
  modules: {
  }
})
