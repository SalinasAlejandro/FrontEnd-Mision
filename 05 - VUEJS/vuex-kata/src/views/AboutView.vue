<template>
  <div class="pastelero">
    <encabezado />

    <h2>Inventario</h2>

    <SaboresPastelero />

    <br />

    <AdornosPastelero />

    <br />
    <hr />
    <br />

    <PedidoPastelero />

    <br /><br />
    <hr />
    <hr />

    <FooterPasteleria />
  </div>
</template>

<script>
import encabezado from "./../components/encabezado.vue";
import SaboresPastelero from "./../components/sabores.pastelero.vue";
import AdornosPastelero from "./../components/adornos.pastelero.vue";
import PedidoPastelero from "./../components/pedido.pastelero.vue";
import FooterPasteleria from "./../components/footerPasteleria.vue";

export default {
  name: "pastelero",

  components: {
    encabezado,
    SaboresPastelero,
    AdornosPastelero,
    PedidoPastelero,
    FooterPasteleria,
  },
};
</script>

<style scoped>
input {
  width: 25px;
}
</style>