<template>
  <h1>Pokémons</h1>
  <PokeList />
</template>
<script>
import PokeList from "../components/PokeList.vue";

export default {
  components: {
    PokeList,
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
