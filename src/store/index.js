import Vue from 'vue'
import Vuex from 'vuex'
import productData from "@/utils/products.json";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
  },
  actions: {
    async cargarJsonData({ commit, state }, usuario) {
      const res = productData.products
      commit('cargarProductos', res)
    },
  },
  modules: {
  }
})
