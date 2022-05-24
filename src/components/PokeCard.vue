<script>
export default {
  props: {
    msg: String,
  },
  data() {
    return {
      pokemons: null,
    };
  },
};
</script>

<style scoped>
div {
  width: 100px;
  height: 100px;
  background-color: aqua;
}
</style>

<template>
  <div>
    <p>Hello</p>
  </div>
</template>
