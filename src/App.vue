<template>
    <circles />
    <card />
</template>

//
<script>
import circles from "./components/circle.vue";
import card from "./components/card.vue";

export default {
  name: 'App',
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
