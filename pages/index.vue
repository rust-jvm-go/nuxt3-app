<template>
  <!-- <h1 class="text-3xl font-bold underline">Index page</h1> -->
  <main>
    <ContentDoc />
    <Alert />
    <ProfileHeader />
    <img src="@/assets/images/1.png" alt="1.png" />
  </main>
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
