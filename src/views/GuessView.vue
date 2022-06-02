<template>
  <h1>Show off your naming knowledge!</h1>
  <p>Click the button below to start playing the game</p>
  <PokeGame />
</template>
<script>
import PokeGame from "../components/PokeGame.vue";
export default {
  components: {
    PokeGame,
  },
};
</script>

<style scoped>
h1,
p {
  text-align: center;
}
</style>
