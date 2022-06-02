<script>
export default {};
</script>

<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">Pokédex</router-link>
      </li>
      <li>
        <router-link to="/guess">Guess that Pokémon!</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
ul {
  display: flex;
  justify-content: center;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
li {
  list-style-type: none;
  margin-right: 20px;
}

a:hover {
  color: green;
}

a {
  text-decoration: none;
  color: orange;
}
</style>
