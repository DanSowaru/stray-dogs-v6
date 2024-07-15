<template>
  <div id="home-screen">

    <div id="home-container">

      <img id="splash_screen" src="@/assets/images/splash_screen.png" alt="stray dogs splash screen">

      <h1 id="welcome-title">Welcome to Stray Dogs!</h1>

      <div id="start-menu-options">
        <div id="new-game-button-container">
          <router-link to="/chat">
            <button id="new-game-button" @click="startNewGame">New Game</button>
          </router-link>
        </div>
        <div id="login-form-container">
          <button id="google-login">Google Login Placeholder</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import { useHiredDogsStore } from '@/stores/HiredDogsStore'

export default defineComponent({
  name: 'HomeView',
  components: {},

  data () {
    return {
      hiredDogsStore: useHiredDogsStore()
    }
  },

  methods: {
    startNewGame () {
      this.hiredDogsStore.newGameStart()
    }
  }
})
</script>
