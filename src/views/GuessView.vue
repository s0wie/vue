<template>
  <h1>Show off your naming knowledge!</h1>
  <p>
    Guess the name of the pokémon. Click the button below to start playing the
    game
  </p>
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
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
</style>
