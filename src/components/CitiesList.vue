<script>
export default {
  created() {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((pokemons) => {
        this.pokemons = pokemons.results;
      });
  },
  data() {
    return {
      pokemons: null,
    };
  },
};
</script>

<template>
  <ol>
    <li v-for="pokemon in pokemons">{{ pokemon.name }}</li>
  </ol>
</template>
