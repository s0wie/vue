<script>
export default {
  data() {
    return {
      randomInteger: null,
      pokemon: null,
      pokemonName: null,
      guess: null,
      img: null,
      reveal: false,
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
    reveal() {},
  },
};
</script>

<template>
  <div class="body">
    <button @click="onClickButton">Give me a pokémon!</button>

    <div v-if="pokemonName">
      <div class="poke-card-container">
        <img :src="img" height="300" width="300" />
      </div>
    </div>

    <div v-if="pokemon !== null" class="guess">
      <div>
        This pokémon's name is:
        <input
          type="text"
          v-model="guess"
          placeholder="Type your answer here"
        />
      </div>
      <div v-if="guess == pokemonName">
        You were correct! Click the button for a new pokémon!
      </div>
    </div>

    <div v-if="pokemon !== null">
      <p>Highlight the text below for a hint.</p>
      <span>Hint: </span>
      <span class="hint">{{ pokemonName }}</span>
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
.body,
.guess {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
.hint {
  color: lightyellow;
}

button {
  margin: 20px;
}
</style>
