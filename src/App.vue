<template>
  <div id="app">
    <Formulario />
  </div>
</template>

<script>
import Formulario from "./components/Formulario.vue";

export default {
  name: "App",
  components: { Formulario },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
 
  background-image: no-repeat;
  bottom: 0;
  color: black;
  left: 0;
  overflow: auto;
  padding: 3em;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  flood-opacity: inherit;
  
}
</style>
