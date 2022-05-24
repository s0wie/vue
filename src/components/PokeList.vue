<script>
import { stringifyStyle } from "@vue/shared";

export default {
  created() {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((pokemons) => {
        this.pokemons = pokemons.results;
        this.nextLink = pokemons.next;
      });
  },
  data() {
    return {
      pokemons: null,
      nextLink: null,
      pageCounter: 1,
      offset: 20,
      previousOffset: null,
      pokemonID: 1,
      spriteLink: null,
    };
  },
  computed: {
    offset() {
      return (this.offset = this.pageCounter * 20);
    },
    previousOffset() {
      return (this.previousOffset = this.pageCounter * 20 - 20);
    },
    spriteLink() {
      return (this.spriteLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemonID}.png`);
    },
  },
  methods: {
    onClick() {
      fetch(`${this.nextLink}`)
        .then((response) => response.json())
        .then((pokemons) => {
          this.pokemons = pokemons.results;
          this.nextLink = pokemons.next;
          this.pageCounter += 1;
        });
    },
    // A gap between previousOffset data and data actually being used
    // which I don't really understand but solved by substracting the gap
    onClickPrev() {
      fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${
          this.previousOffset - 20
        }&limit=20`
      )
        .then((response) => response.json())
        .then((pokemons) => {
          this.pokemons = pokemons.results;
          this.pageCounter -= 1;
          this.nextLink = pokemons.next;
        });
    },
  },
};
</script>

<template>
  <div class="body">
    <div class="poke-card-container">
      <div v-for="pokemon in pokemons" class="poke-card">
        {{ pokemon.name }}
        <div>
          <img
            :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              this.pokemonID + 3
            }.png`"
          />
        </div>
      </div>
    </div>

    <h1>{{ nextLink }}</h1>
    <h2>Page {{ pageCounter }}</h2>
    <h2 class="hidden">{{ previousOffset }}</h2>

    <input value="Next Page" @click="onClick" type="button" />
    <div v-if="pageCounter > 1">
      <input value="Prev Page" @click="onClickPrev" type="button" />
    </div>
    <div v-else>
      <input value="Prev Page" @click="onClickPrev" type="button" disabled />
    </div>
  </div>
</template>

<style scoped>
.poke-card {
  width: 100px;
  height: 100px;
  margin: 5px;
  background-color: aqua;
  border: 1px solid black;
}

.poke-card-container {
  max-width: 700px;
  display: flex;
  flex-wrap: wrap;
}

.body {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hidden {
  display: none;
}
</style>
