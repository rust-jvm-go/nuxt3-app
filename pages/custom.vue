<template>
  <div class="CustomPage">Custom page</div>
</template>

<script>
export default {
  name: "custom",
  mounted() {
    definePageMeta({
      layout: "custom",
    });
  }
}
</script>

<style scoped>

</style>