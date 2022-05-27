<script>
import PokeList from "./components/PokeList.vue";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  components: {
    PokeList,
    HelloWorld,
  },
};
</script>

<template>
  <HelloWorld msg="Hello World!" />
  <PokeList />
  <nav>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">Guess that Pokémon!</router-link>
      </li>
      <li>
        <router-link to="/contact">Kontakt</router-link>
      </li>
    </ul>
  </nav>
  <main>
    <router-view />
  </main>
</template>
