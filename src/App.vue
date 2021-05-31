<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Emera',
  meta: [
    { name: 'description', content: 'Emera web app' },
  ],
})

</script>

<template>
  <router-view />
</template>

<style>
* {
    font-family: 'Oxygen', sans-serif !important;
  }
</style>
