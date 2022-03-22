<template>
  <h3>Cantidad de sabores</h3>
  <ul>
    <li>
      CHOCOLATE............
      <input
        type="text"
        name="choco"
        id="choco"
        v-model="choco"
        placeholder="Cantidad de chocolate"
      />
    </li>
    <li>
      VAINILLA.................
      <input
        type="text"
        name="vainilla"
        id="vainilla"
        v-model="vainilla"
        placeholder="Cantidad de vainilla"
      />
    </li>
    <li>
      FRESA.......................
      <input
        type="text"
        name="fresa"
        id="fresa"
        v-model="fresa"
        placeholder="Cantidad de fresa"
      />
    </li>
    <li>
      MANGO....................
      <input
        type="text"
        name="mango"
        id="mango"
        v-model="mango"
        placeholder="Cantidad de mango"
      />
    </li>
    <li>
      NUEZ.........................
      <input
        type="text"
        name="nuez"
        id="nuez"
        v-model="nuez"
        placeholder="Cantidad de nuez"
      />
    </li>
  </ul>
</template>

<script>
export default {
  name: "SaboresPastelero",

  computed: {
    choco: {
      get() {
        return this.$store.state.choco;
      },
      set(choco) {
        this.$store.commit("chocoChange", choco);
      },
    },
    vainilla: {
      get() {
        return this.$store.state.vainilla;
      },
      set(vainilla) {
        this.$store.commit("vainillaChange", vainilla);
      },
    },
    fresa: {
      get() {
        return this.$store.state.fresa;
      },
      set(fresa) {
        this.$store.commit("fresaChange", fresa);
      },
    },
    mango: {
      get() {
        return this.$store.state.mango;
      },
      set(mango) {
        this.$store.commit("mangoChange", mango);
      },
    },
    nuez: {
      get() {
        return this.$store.state.nuez;
      },
      set(nuez) {
        this.$store.commit("nuezChange", nuez);
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