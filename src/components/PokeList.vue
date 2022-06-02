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
      offset: null,
    };
  },
  computed: {
    offset() {
      return (this.offset = this.pageCounter * 20);
    },
    previousOffset() {
      return (this.previousOffset = this.pageCounter * 20 - 20);
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
          this.array.forEach((element) => {
            element = element + 1;
          });
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
        <a :href="pokemon.url"> {{ pokemon.name }}</a>
        <div class="sprite-container">
          <img
            :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              pokemon.url.split('/')[6]
            }.png`"
          />
        </div>
      </div>
    </div>

    <!-- <h1>{{ nextLink }}</h1> -->
    <h2 class="hidden">{{ previousOffset }}</h2>
    <div class="buttons-container">
      <div v-if="pageCounter > 1">
        <input value="Prev Page" @click="onClickPrev" type="button" />
      </div>
      <div v-else>
        <input value="Prev Page" @click="onClickPrev" type="button" disabled />
      </div>
      <div>Page {{ pageCounter }}</div>
      <input value="Next Page" @click="onClick" type="button" />
    </div>
  </div>
</template>

<style scoped>
.poke-card {
  width: 110px;
  height: 118px;
  margin: 5px;
  background-image: url("../../assets/card-background.png");
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border: 1px solid black;
}

.poke-card-container {
  max-width: 900px;
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

.buttons-container {
  margin: 20px;
  width: 500px;
  display: flex;
  justify-content: space-between;
}

a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
</style>

// next step: Vue router
