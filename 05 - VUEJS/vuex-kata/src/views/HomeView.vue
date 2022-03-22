<template>
  <div class="cliente">
    <encabezado />

    <h2>MENÚ</h2>

    <SaboresCliente />

    <AdornosCliente />

    <br /><br />
    <hr />
    <br /><br />

    <PedidoCliente />

    <br /><br />
    <hr />
    <hr />

    <FooterPasteleria />
  </div>
</template>

<script>
import encabezado from "./../components/encabezado.vue";
import SaboresCliente from "./../components/sabores.cliente.vue";
import AdornosCliente from "./../components/adornos.cliente.vue";
import PedidoCliente from './../components/pedido.cliente.vue';
import FooterPasteleria from './../components/footerPasteleria.vue'

export default {
  name: "HomeView",

  components: {
    encabezado,
    SaboresCliente,
    AdornosCliente,
    PedidoCliente,
    FooterPasteleria,
  },
};
</script>

<style>
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: black;
}
</style>