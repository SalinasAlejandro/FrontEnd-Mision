import { createStore } from 'vuex'

export default createStore({
  state: {

    name: '',
    phone: '',
    email: '',
    description: '',
    flavors: [],
    decorations: [],
    saved: false,

    choco: 35,
    vainilla: 30,
    fresa: 20,
    mango: 40,
    nuez: 15,

    feliz: 12,
    tuNombre: 109,
    chispitas: 6,
    arcoiris: 54,
    pajaritos: 6

  },
  getters: {
  },
  mutations: {

    nameChange(state, name) {
      state.name = name;
      console.log(state.name);
    },
    phoneChange(state, phone) {
      state.phone = phone;
      console.log(state.phone);
    },
    emailChange(state, email) {
      state.email = email;
      console.log(state.email);
    },
    descriptionChange(state, description) {
      state.description = description;
      console.log(state.description);
    },
    flavorsChange(state, flavor) {
      let sabores = state.flavors;
      if (sabores.includes(flavor)) {
        state.flavors.splice(sabores.indexOf(flavor), 1);
      } else {
        state.flavors.push(flavor);
      }
    },
    decorationsChange(state, deco) {
      let decoracion = state.decorations;
      if (decoracion.includes(deco)) {
        state.decorations.splice(decoracion.indexOf(deco), 1);
      } else {
        state.decorations.push(deco);
      }
    },
    save(state) {
      state.saved = true;
    },

    chocoChange(state, choco) {
      state.choco = choco;
      console.log(state.choco);
    },
    vainillaChange(state, vainilla) {
      state.vainilla = vainilla;
    },
    fresaChange(state, fresa) {
      state.fresa = fresa;
    },
    mangoChange(state, mango) {
      state.mango = mango;
    },
    nuezChange(state, nuez) {
      state.nuez = nuez;
    },

    felizChange(state, feliz) {
      state.feliz = feliz;
    },
    tuNombreChange(state, tuNombre) {
      state.tuNombre = tuNombre;
    },
    chispitasChange(state, chispitas) {
      state.chispitas = chispitas;
    },
    arcoirisChange(state, arcoiris) {
      state.arcoiris = arcoiris;
    },
    pajaritosChange(state, pajaritos) {
      state.pajaritos = pajaritos;
    },

  },

  actions: {

    nameChange({ commit }, name) {
      commit("nameChange", name);
    },
    phoneChange({ commit }, phone) {
      commit("phoneChange", phone);
    },
    emailChange({ commit }, email) {
      commit("emailChange", email);
    },
    descriptionChange({ commit }, description) {
      commit("descriptionChange", description);
    }

  },
  modules: {
  }
})

