<template>
  <h1 class="text-3xl font-bold underline">
    Event ID: {{ $route.params.id }}
  </h1>
</template>

<script setup>
const nuxt = useNuxtApp();
console.log(nuxt);
/*
export default {
    name: "profile"
}
*/
</script>

<style scoped>

</style>