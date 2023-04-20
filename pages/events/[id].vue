<template>
  <h1 class="text-3xl font-bold underline">
    Event ID: {{ $route.params.id }}
  </h1>
</template>

<script>
export default {
  name: "profile",
  mounted() {
    definePageMeta({
      middleware: "authentication",
    })
    const nuxt = useNuxtApp();
    console.log(nuxt);
  },
  unmounted() {
    console.log("Unmounted!");
  }
}
</script>

<style lang="scss" scoped>

</style>
