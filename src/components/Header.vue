<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

</script>
<template>
  <a-layout-header class="header flex items-center">
    <a-dropdown @click.prevent>
      <div class="ml-auto flex items-center cursor-pointer">
        <span class="mx-4 uppercase text-gray-600 tracking-wide">{First Name} {Last Name}</span>
        <a-avatar :src="`https://avatars.dicebear.com/api/jdenticon/test@example.com.svg`" class="bg-blue-500">
        </a-avatar>
      </div>
      <template #overlay>
        <a-menu>
          <a-menu-item>
            <router-link class="" to="/notifications">
              Notifications
            </router-link>
          </a-menu-item>
          <a-menu-item>
            <router-link class="" to="/profile">
              Account
            </router-link>
          </a-menu-item>
          <a-menu-item>
            Logout
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </a-layout-header>
</template>

<style lang="scss">
 @import "../styles/theme.scss";

 .a-layout-header{
   position: fixed;
 }

 .header{
   background-color: rgba(0,0,0,0);
 }
 </style>
