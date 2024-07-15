
<template>
  <section id="chatlog-list-container">

    <ChatblockComponent
      v-show="!openedActiveChat"
      v-for="dogListUnit in hiredDogsStore.hiredDogs"
      :key="dogListUnit.dogId"
      :chatPreviewProp="dogListUnit"
      @click="openActiveChatComponent(dogListUnit)"
    />

    <ActiveChatComponent
      v-show="openedActiveChat"
      :activeDog="activeDog"
      :key="activeDog.dogId"
      @close-active-chat="triggerActiveChat"
    />

<div class="debug-menu">
  <h3>
    Debug Menu
  </h3>
  <div>
    <button @click="testUpdate">update hiredDogList</button>
    <button @click="testUpdate2">update hiredDogList message</button>
    <button @click="testLog">console.log()</button>
    <button @click="hiredDogsStore.$reset">Reset hiredDogStore</button>
    <button @click="hiredDogsStore.newGameStart">Restart Game</button>
  </div>
</div>

  </section>
</template>

<script>

import ChatblockComponent from '@/components/ChatblockComponent.vue'
import ActiveChatComponent from '@/components/ActiveChatComponent.vue'

import { Dog } from '@/data/Dog'
import { useHiredDogsStore } from '@/stores/HiredDogsStore'

export default {
  name: 'ChatView',
  components: {
    ChatblockComponent,
    ActiveChatComponent
  },

  data () {
    return {

      hiredDogsStore: useHiredDogsStore(),

      openedActiveChat: false,

      activeDog: new Dog(), // placeholder to be used in ActiveChat data

      activeKey: 0, // used to force update the ActiveChat Portrait

      // ---------------------------TESTING-------------------------------
      jackRabbit: new Dog(
        '4',
        'Jack Rabbit',
        'femrab2',
        86,
        10,
        76,
        8,
        90,
        18,
        4,
        48,
        60,
        21
      )
      // ---------------------------TESTING-------------------------------
    }
  },

  methods: {

    /* eslint-disable prefer-const */
    /* eslint-disable no-tabs */

    // ///////////////////////////////////////////////////////////////
    // /////////////////                         /////////////////////
    // /////////////////        Active Chat      /////////////////////
    // /////////////////                         /////////////////////
    // ///////////////////////////////////////////////////////////////

    openActiveChatComponent (dogListUnit) {
      this.activeKey = dogListUnit.dogId + dogListUnit.dogLastMessage
      this.activeDog = dogListUnit
      this.activeDog.dogUnreadMessages = 0
      this.triggerActiveChat(true)
    },

    triggerActiveChat (value) {
      this.openedActiveChat = value
    },

    //             ///////////////////////////////////////////////////
    //             /////////////////                         /////////
    //             /////////////////        TEST AREA        /////////
    //             /////////////////                         /////////
    //             ///////////////////////////////////////////////////

    testUpdate () {
      // updating here or in the store array works
      this.jackRabbit.newMessage('This message will also show regardless of sending any info to the Store!')
      let testMessage = 'Is this thing turned on? lorem ipsum In this revised example, the ChildComponent emits an update-message event with the new message, and the ParentComponent listens for this event and updates its message data property accordingly. This is the recommended way to communicate changes from a child component back to its parent in Vue 3.'
      this.hiredDogsStore.dogSendMessage(this.jackRabbit, [testMessage])
    },
    testUpdate2 () {
      this.hiredDogsStore.testUpdate2(this.jackRabbit)
    },

    testLog () {
      console.log(this.hiredDogsStore.hiredDogs)
    }
  }
}
</script>
