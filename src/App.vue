<template>
  <div id="app">
    <Toast/>
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
  
  
 
  background-image: no-repeat;
  bottom: 0;
  color: black;
  left: 0;
  overflow: auto;
  padding: 3em;
  background-image: url("https://www.blumenau.sc.gov.br/view/media/up/703141f558bcad050a3f13f791195ba1.png");
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
