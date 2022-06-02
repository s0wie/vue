<script>
export default {};
</script>

<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
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
}
li {
  list-style-type: none;
  margin-right: 20px;
}

a:hover {
  color: blue;
}

a {
  text-decoration: none;
  color: blacK;
}
</style>
