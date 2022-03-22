<template>
  <h2>Haz tu pedido :D</h2>

  <form>
    <!--Nombre, Teléfono, Correo Electrónico, Descripción general del pastel y la selección de sabores y 
            adornos -->
    <label for="name">Nombre</label>
    <input
      type="text"
      name="name"
      id="name"
      v-model="nombre"
      placeholder="Ingrese su nombre"
    />
    <br /><br />
    <label for="phone">Teléfono</label>
    <input
      type="tel"
      name="phone"
      id="phone"
      v-model="telefono"
      placeholder="Ingrese su número teléfonico"
    />
    <br /><br />
    <label for="email">Correo Electrónico</label>
    <input
      type="email"
      name="email"
      id="email"
      v-model="correo"
      placeholder="Ingrese su correo electrónico"
    />
    <br /><br />
    <textarea
      name="description"
      id="description"
      cols="30"
      rows="10"
      v-model="desc"
      placeholder="Descripción general del pastel"
    ></textarea>

    <h4>Seleccione el o los sabores para su pastel</h4>
    <input type="checkbox" name="chocolate" id="chocolate" @change="sabores" />
    <label for="chocolate">Chocolate</label><br />
    <input type="checkbox" name="fresa" id="fresa" @change="sabores" />
    <label for="fresa">Fresa</label><br />
    <input type="checkbox" name="mango" id="mango" @change="sabores" />
    <label for="mango">Mango</label><br />
    <input type="checkbox" name="nuez" id="nuez" @change="sabores" />
    <label for="nuez">Nuez</label><br />

    <h4>Selecciones el o las decoraciones para su pastel</h4>
    <input type="checkbox" name="feliz" id="feliz" @change="decoraciones" />
    <label for="feliz">Feliz cumpleaños</label><br />
    <input
      type="checkbox"
      name="tuNombre"
      id="tuNombre"
      @change="decoraciones"
    />
    <label for="tuNombre">Tu nombre</label><br />
    <input
      type="checkbox"
      name="chisptas"
      id="chisptas"
      @change="decoraciones"
    />
    <label for="chisptas">Chispitas</label><br />
    <input
      type="checkbox"
      name="arcoiris"
      id="arcoiris"
      @change="decoraciones"
    />
    <label for="arcoiris">Arcoíris</label><br />
    <input
      type="checkbox"
      name="pajaritos"
      id="pajaritos"
      @change="decoraciones"
    />
    <label for="pajaritos">Pajaritos</label><br />

    <br />
  </form>
  <button @click="guardar">
    <router-link :to="{ name: 'pastelero' }">Hacer pedido</router-link>
  </button>
</template>

<script>

export default {
  name: "PedidoCliente",

  methods: {
    sabores(e) {
      this.$store.commit("flavorsChange", e.target.name);
    },
    decoraciones(decora) {
      this.$store.commit("decorationsChange", decora.target.name);
    },
    guardar() {
      this.$store.commit("save");
    },
  },

  computed: {
    nombre: {
      get() {
        return this.$store.state.name;
      },
      set(nombre) {
        this.$store.dispatch("nameChange", nombre);
      },
    },
    telefono: {
      get() {
        return this.$store.state.phone;
      },
      set(telefono) {
        this.$store.dispatch("phoneChange", telefono);
      },
    },
    correo: {
      get() {
        return this.$store.state.email;
      },
      set(correo) {
        this.$store.dispatch("emailChange", correo);
      },
    },
    desc: {
      get() {
        return this.$store.state.description;
      },
      set(desc) {
        this.$store.dispatch("descriptionChange", desc);
      },
    },
  },
};
</script>