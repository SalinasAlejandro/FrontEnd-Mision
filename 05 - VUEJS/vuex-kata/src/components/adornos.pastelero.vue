<template>
  <h3>Cantidad de adornos</h3>
  <ul>
    <li>
      Feliz cumpleaños.........
      <input
        type="text"
        name="feliz"
        id="feliz"
        v-model="feliz"
        placeholder="Cantidad de feliz"
      />
      paquetes
    </li>
    <li>
      Tu nombre....................
      <input
        type="text"
        name="tuNombre"
        id="tuNombre"
        v-model="tuNombre"
        placeholder="Cantidad de tuNombre"
      />
      letras
    </li>
    <li>
      Chispitas.........................
      <input
        type="text"
        name="chispitas"
        id="chispitas"
        v-model="chispitas"
        placeholder="Cantidad de chispitas"
      />
      bolsas
    </li>
    <li>
      Arcoíris.....................
      <input
        type="text"
        name="arcoiris"
        id="arcoiris"
        v-model="arcoiris"
        placeholder="Cantidad de arcoiris"
      />
      paquetes
    </li>
    <li>
      Pajaritos...........................
      <input
        type="text"
        name="pajaritos"
        id="pajaritos"
        v-model="pajaritos"
        placeholder="Cantidad de pajaritos"
      />
      pares
    </li>
  </ul>
</template>

<script>
export default {
  name: "AdornosPastelero",

  computed: {
    feliz: {
      get() {
        return this.$store.state.feliz;
      },
      set(feliz) {
        this.$store.commit("felizChange", feliz);
      },
    },
    tuNombre: {
      get() {
        return this.$store.state.tuNombre;
      },
      set(tuNombre) {
        this.$store.commit("tuNombreChange", tuNombre);
      },
    },
    chispitas: {
      get() {
        return this.$store.state.chispitas;
      },
      set(chispitas) {
        this.$store.commit("chispitasChange", chispitas);
      },
    },
    arcoiris: {
      get() {
        return this.$store.state.arcoiris;
      },
      set(arcoiris) {
        this.$store.commit("arcoirisChange", arcoiris);
      },
    },
    pajaritos: {
      get() {
        return this.$store.state.pajaritos;
      },
      set(pajaritos) {
        this.$store.commit("pajaritosChange", pajaritos);
      },
    },
  },
};
</script>

<style scoped>
input {
  width: 25px;
}
</style>