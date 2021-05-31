<script setup lang="ts">


</script>

<template>
 <div class="mainContent">
  <div class="header">
    <h1>Test Composer</h1>
  </div>
  <Composer />
  </div>

</template>

<route lang="yaml">
meta:
  layout: default
  requiresAuth: false
</route>

<style lang="scss">

.mainContent{
  padding: 48px;
}
.header{
  margin-top: 24px;
  margin-bottom: 48px;
  font-size: 2em;
}

</style>
