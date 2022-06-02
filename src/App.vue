<script>
import Header from "./components/Header.vue";
import Navigation from "./components/Navigation.vue";

export default {
  components: {
    Header,
    Navigation,
  },
};
</script>

<template>
  <Header msg="Gotta catch'em all!" />
  <Navigation />
  <main>
    <router-view />
  </main>
</template>

<style>
body {
  background-color: lightyellow;
}
</style>
