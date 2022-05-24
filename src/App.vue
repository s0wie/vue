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
</template>
