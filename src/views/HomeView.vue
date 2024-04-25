<template>
  <div id="home-screen">

    <div id="home-container">

      <img id="splash_screen" src="@/assets/images/splash_screen.png" alt="stray dogs splash screen">

      <h1>Welcome to Stray Dogs!</h1>

      <div id="login-form-container">
        <button id="google-login">Google Placeholder</button>
      </div>

    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView',
  components: {}
})
</script>
