<script>
export default {
  props: {
    msg: String,
    link: String,
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
    <a :href="link"
      ><p>{{ msg }}</p></a
    >
  </div>
</template>
