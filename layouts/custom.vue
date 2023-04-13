<template>
  <div class="CustomLayout h-screen text-white bg-blue-900">
    <!-- This default layout will be applied to the whole site. -->
    <p>Custom layout</p>
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: "custom"
}
</script>

<style lang="scss" scoped>

</style>