<template>
  <div class="container py-3 mx-auto Greeting">
    <h1 class="text-teal-500">Hello Nuxt 3!</h1>
  </div>
</template>

<script lang="ts" setup>
const { sayHello } = useUtils();
sayHello();
</script>

<style lang="scss" scoped>

</style>
