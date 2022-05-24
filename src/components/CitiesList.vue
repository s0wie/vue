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
  <div v-for="pokemon in pokemons">
    {{ pokemon.name }}
    <img :src="spriteLink" />
  </div>

  <h1>{{ nextLink }}</h1>
  <h2>Page {{ pageCounter }}</h2>
  <h2>hello {{ offset }}</h2>
  <h2>{{ previousOffset }}</h2>
  <input value="Next Page" @click="onClick" type="button" />
  <div v-if="pageCounter > 1">
    <input value="Prev Page" @click="onClickPrev" type="button" />
  </div>
  <div v-else>
    <input value="Prev Page" @click="onClickPrev" type="button" disabled />
  </div>
</template>
