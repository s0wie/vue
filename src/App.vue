<script>
import String from "./components/String.vue";
import Navigation from "./components/Navigation.vue";

export default {
  components: {
    String,
    Navigation,
  },
};
</script>

<template>
  <String msg="Gotta catch'em all!" />
  <Navigation />
  <main>
    <router-view />
  </main>
</template>
