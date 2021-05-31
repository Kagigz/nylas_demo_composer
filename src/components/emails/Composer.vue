<script setup lang="ts">
import { reactive } from 'vue'
import { onMounted} from '@vue/runtime-core'
import '@nylas/components-composer'

const composer = reactive({
  id: '',
  accessToken: '',
  values: {
    to: [],
    subject: 'New Message',
    body: 'Test body',
  },
  options: {
    show_header: false,
    show_subject: true,
    mode: 'inline',
    theme: 'light',
    show_editor_toolbar: true,
    show_from: false,
    show_to: true,
    show_close_button: false,
    show_minimize_button: false,
  },
  loading: false,
})

const loadVariables = () => {
  composer.id = import.meta.env.VITE_COMPOSER_ID
  composer.accessToken = import.meta.env.VITE_USER_TOKEN
}

onMounted(() => {
  loadVariables()
})

</script>

<template>
  <nylas-composer
    :id="composer.id"
    :value="composer.values"
    :options="composer.options"
    :access_token="composer.accessToken"
  >
  </nylas-composer>
</template>

<style lang="scss">

.nylas-composer {
        --background: rgb(40, 43, 43);
        --background-muted: #454949;
        --text: #fff;
        --text-light: #B0B0C0;
        --text-secondary: #FFFFFF;
        --font: $body-font, sans-serif;
        --font-size: 14px;
        --font-size-small: 12px;

        --border: #282828;
        --primary-light: $violet-light2;
        --primary: $violet-regular;
        --icons: #8E8E98;
        --header-background: var(--background);

        --success: white;
        --success-light: var(--primary);

        --danger: #ffffff;
        --danger-light: #FF5454;

        --info: var(--primary-light);
        --info-light: #AEBFF9;
    }

</style>
