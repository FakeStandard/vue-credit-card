<template>
  <div id="app">
    <circles />
    <card />
  </div>
</template>
//
<script>
import circles from "./components/circle.vue";
import card from "./components/card.vue";
export default {
  name: "App",
  components: {
    circles,
    card,
  },
};
// import HelloWorld from './components/HelloWorld.vue'
// export default {
//   name: 'App',
//   components: {
//     HelloWorld
//   }
// }
//
</script>
<style>
body {
  background: #1488cc;
  /* fallback for old browsers */
  background: linear-gradient(to left, #726a6acb, #000000);
  height: 100vh;
  font-family: "Josefin Sans", sans-serif;
}
</style>