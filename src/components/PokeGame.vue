<script>
export default {
  data() {
    return {
      randomInteger: null,
      pokemon: null,
      pokemonName: null,
      guess: null,
      img: null,
    };
  },
  computed: {
    randomInteger() {
      return (this.randomInteger = Math.floor(Math.random() * 898));
    },
  },
  methods: {
    onClickButton() {
      this.randomInteger = Math.floor(Math.random() * 898);
      this.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.randomInteger}.png`;
      fetch(`https://pokeapi.co/api/v2/pokemon/${this.randomInteger}/`)
        .then((response) => response.json())
        .then((pokemon) => {
          this.pokemon = pokemon.results;
          console.log(pokemon);
          console.log(pokemon.species.name);
          this.pokemonName = pokemon.species.name;
        });
    },
  },
};
</script>

<template>
  <div>
    <div v-if="pokemonName">
      <div class="poke-card-container">
        <img :src="img" height="300" width="300" />
      </div>
    </div>
    <button @click="onClickButton">Guess the pokémon</button>
    <input type="text" v-model="guess" placeholder="Type your answer here" />
    <div v-if="guess == pokemonName">
      You were correct! Click the button to guess the name of a new pokémon.
    </div>

    <div>
      <h2>Answer:</h2>
      <p>{{ pokemonName }}</p>
    </div>
  </div>
</template>

<style scoped>
.poke-card-container {
  width: 300px;
  height: 320px;
  background-image: url("../../assets/card-background.png");
  background-size: contain;
}
</style>
