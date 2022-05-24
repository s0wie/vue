<script>
export default {
  props: {
    msg: String,
  },
};
</script>

<style scoped>
p {
  font-weight: bold;
}

img {
  width: 50vw;
}

div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

<template>
  <div>
    <img alt="" src="/assets/pokemonlogo.png" />
    <p>{{ msg }}</p>
  </div>
</template>
