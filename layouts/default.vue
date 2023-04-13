<template>
  <div class="DefaultLayout h-screen text-white bg-slate-900">
    <!-- This default layout will be applied to the whole site. -->
    <p>Default layout</p>
    <slot />
  </div>
</template>

<script lang="ts">
export default {
    name: "default"
}
</script>

<style lang="scss" scoped>

</style>