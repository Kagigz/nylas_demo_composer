<script setup lang="ts">
import { ref } from '@vue/reactivity'
import { BarsOutlined, MailOutlined, CalendarOutlined, ApartmentOutlined, ProjectOutlined, FolderOpenOutlined, BarChartOutlined } from '@ant-design/icons-vue'

const collapsed = ref<boolean>(true)
const selectedKeys = ref<string[]>(['1'])

</script>
<template>
  <a-layout-sider
    v-model="collapsed"
    :default-collapsed="true"
    class="h-screen"
    theme="light"
    collapsed-width="64px"
  >
    <div class="logo">
      <img src="https://storage.googleapis.com/emera-content/base_logo.png" alt="logoEmera" class="logoImg">
    </div>
    <a-menu theme="light" :default-selected-keys="['1']" mode="inline" collapsed-width="50px">
      <a-menu-item key="1">
        <router-link to="/">
          <BarsOutlined class="menuIcon" />
          <span class="menuItemText">Dashboard</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="2">
        <router-link to="/emails">
          <MailOutlined class="menuIcon" />
          <span class="menuItemText">Mails</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="3">
        <router-link to="/agenda">
          <CalendarOutlined class="menuIcon" />
          <span class="menuItemText">Calendar</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="4">
        <router-link to="/dashboard">
          <ProjectOutlined class="menuIcon" />
          <span class="menuItemText">Kanban</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="5">
        <router-link to="/resources">
          <FolderOpenOutlined class="menuIcon" />
          <span class="menuItemText">Resources</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="6">
        <router-link to="/rules">
          <ApartmentOutlined class="menuIcon" />
          <span class="menuItemText">Automations</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="7">
        <router-link to="/statistics">
          <BarChartOutlined class="menuIcon" />
          <span class="menuItemText">Statistics</span>
        </router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<style lang="scss">
 @import "../styles/theme.scss";

 .ant-menu-item {

  .anticon{
   color: $grey-600;
  }

 }

 .menuIcon{
  width: 100%;
  justify-content: center;
  text-align: center;

 }

.ant-menu-inline-collapsed{
  width: 64px;

  .ant-menu-item{
    padding: 0;
  }
}

.ant-menu-inline-collapsed .ant-menu-item {
  padding: 0 !important;
}


 .ant-menu-inline .ant-menu-item::after {
    border-right: 3px solid $blue-dark2;
}

 .ant-menu-item .ant-menu-vertical .anticon{
   color: $primary;

 }
 .ant-menu-item-selected{
   background-color: $violet-light2 !important;

   .anticon{
    color: $primary !important;
   }
 }

 .navLogo .anticon{
    color:white;
  }

.logo {
  width: 64px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 0px;
  padding: 16px;
}

.logoImg{
  width: 100%;
}

</style>
