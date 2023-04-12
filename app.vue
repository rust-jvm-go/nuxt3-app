<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <!-- <h1 class="text-3xl font-bold underline">Hello Nuxt 3!</h1> -->
    <NuxtLayout>
      <header>
        <ul>
          <li>
            <NuxtLink to="/">Home</NuxtLink>&nbsp;
            <NuxtLink to="events">Events</NuxtLink>
          </li>
        </ul>
      </header>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
</script>