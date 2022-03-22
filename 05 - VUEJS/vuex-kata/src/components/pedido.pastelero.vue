<template>
  <h2>Pedido En proceso</h2>
  <table border="1" align="center">
    <tr>
      <th>Nombre</th>
      <th>Teléfono</th>
      <th>Correo</th>
      <th>Descripción</th>
      <th>Sabor(es)</th>
      <th>Adorno(s)</th>
    </tr>
    <tr v-if="$store.state.saved">
      <td>{{ $store.state.name }}</td>
      <td>{{ $store.state.phone }}</td>
      <td>{{ $store.state.email }}</td>
      <td>{{ $store.state.description }}</td>
      <td>{{ $store.state.flavors }}</td>
      <td>{{ $store.state.decorations }}</td>
    </tr>
    <tr v-else>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "PedidoPastelero",
};
</script>