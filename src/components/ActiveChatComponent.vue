<template>
  <div id="active-chat-container">
    <section id="active-chat-header">
      <div id="active-chat-portrait-container">
        <img id="active-chat-portrait" :src="dogPortrait" alt="Dog Portrait">
      </div>
      <div id="active-chat-name-container">
        <h2 id="active-chat-name" class="white-text">
          {{ dogName }}
        </h2>
      </div>
    </section>
    <section id="active-chat-feed" ref="chatfeed">
      <div class="active-chat-feed-balloon" v-for="(chatInput, index) in activeDog.dogMessages" :key="index">
        <p class="active-chat-feed-balloon-text">
          {{ chatInput.message }}
        </p>
      </div>
    </section>
    <div class="back-button" @click="closeActiveChat">
      <img src="@/assets/images/icons/back_icon.png" alt="return to previous screen">
    </div>

  </div>

</template>

<script>

import { Dog } from '@/data/Dog'

export default {
  name: 'ActiveChatComponent',
  components: {},

  props: {
    activeDog: {
      type: Dog,
      required: false,
      default: null
    }
  },

  watch: {},

  data () {
    return {
      loadedDog: this.activeDog,
      defaultDog: new Dog(),
      defaultName: 'No Dog Selected!',
      defaultPortrait: require('@/assets/images/portraits/unknown.png')
    }
  },

  computed: {

    dogPortrait () {
      try {
        if (this.loadedDog) {
          return require('@/assets/images/portraits/' + this.loadedDog.dogPortrait + '.png')
        } else {
          return this.defaultPortrait
        }
      } catch (error) {
        console.error('activeDog has no PORTRAIT', error)
        return this.defaultPortrait
      }
    },

    dogName () {
      try {
        if (this.loadedDog) {
          return this.loadedDog.dogName
        } else {
          return this.defaultName
        }
      } catch (error) {
        console.error('activeDog has no NAME', error)
        return this.defaultName
      }
    }
  },

  methods: {

    closeActiveChat () {
      this.$emit('close-active-chat', false)
      // TODO: import store to zero the unreadMessages again
    }

    // TODO: DO auto scroll to the bottom of the chat feed
    //   scrollToBottom () {
    //     this.$nextTick(() => {
    //       const container = this.$refs.autoScrollBottom //name of the container it's referenced as ref="autoScrollBottom" at the container tag
    //       container.scrollTop = container.scrollHeight
    //     })
    //   }
    // },

    // mounted () {
    //   console.log('mounted')
    //   this.scrollToBottom()
    // },

    // updated () {
    //   console.log('updated')
    //   this.scrollToBottom()
    // }
  }
}
</script>
