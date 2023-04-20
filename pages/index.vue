<template>
  <!-- <h1 class="text-3xl font-bold underline">Index page</h1>-->
  <div class="Main">
    <Alert />
    <ProfileHeader />
    <img src="@/assets/images/1.png" alt="1.png" />
  </div>
</template>

<script lang="ts">
export default {
  name: "Main index",
  mounted() {
    const { $hello } = useNuxtApp();
    $hello(`I'm INVINCIBLE!!!`);
  }
}
</script>

<style lang="scss" scoped>

</style>
