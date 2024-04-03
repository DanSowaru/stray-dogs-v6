
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
      :key="activeKey"
      @close-active-chat="triggerActiveChat"
    />

    <button @click="testUpdate">update hiredDogList</button>
    <button @click="testUpdate2">update hiredDogList message</button>
    <button @click="testLog">console.log()</button>

  </section>
</template>

<script>

import ChatblockComponent from '@/components/ChatblockComponent.vue'
import ActiveChatComponent from '@/components/ActiveChatComponent.vue'

import { Dog } from '@/assets/gamefiles/Dog.ts'
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

      // ----------------------------TESTING
      jackRabbit: new Dog(
        '3',
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
    }
  },

  methods: {

    // ///////////////////////////////////////////////////////////////
    // /////////////////                         /////////////////////
    // /////////////////        Active Chat      /////////////////////
    // /////////////////                         /////////////////////
    // ///////////////////////////////////////////////////////////////

    openActiveChatComponent (dogListUnit) {
      this.activeKey = dogListUnit.dogId
      this.activeDog = dogListUnit
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
      this.hiredDogsStore.testUpdate(this.jackRabbit)
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
@/data/Dog
