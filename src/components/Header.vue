<script>
export default {
  props: {
    msg: String,
    link: String,
  },
};
</script>

<style scoped>
h1 {
  font-weight: bold;
  font-size: larger;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
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
    <a :href="link"
      ><h1>{{ msg }}</h1></a
    >
  </div>
</template>
