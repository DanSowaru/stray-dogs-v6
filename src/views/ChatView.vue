
<template>
  <section id="chatlog-list-container">

    <ChatblockComponent
      v-show="!openedActiveChat"
      v-for="dogListUnit in hiredDogList"
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

import { Dog } from '@/assets/gamefiles/Dog.js'
import { CHARACTER_LIST } from '@/assets/gamefiles/DOG_LIST'

export default {
  name: 'ChatView',
  components: {
    ChatblockComponent,
    ActiveChatComponent
  },

  data () {
    return {

      hiredDogList: CHARACTER_LIST,

      openedActiveChat: false,

      activeDog: new Dog(),

      activeKey: 0, // used to force update the ActiveChat Portrait

      dogId: 0,

      // TESTING
      jackRabbit: new Dog(
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

    /* eslint-disable prefer-const */
    /* eslint-disable no-tabs */

    // ///////////////////////////////////////////////////////////////
    // /////////////////                         /////////////////////
    // /////////////////        Chat List        /////////////////////
    // /////////////////                         /////////////////////
    // ///////////////////////////////////////////////////////////////

    isExistingDog (dogName) {
      let newDogResult = this.hiredDogList.some(chatbox => chatbox.dogName === dogName)
      return newDogResult
    },

    generateNewId () {
      this.dogId++
      const isIdAlreadyUsed = this.hiredDogList.some(chatbox => chatbox.dogId === this.dogId)
      return isIdAlreadyUsed ? this.generateNewId() : this.dogId
    },

    updateChatlog (dogObject) {
      if (!this.isExistingDog(dogObject.dogName)) {
        let newId = this.generateNewId()
        dogObject.dogId = newId
        this.hiredDogList.push(dogObject)
      } else {
        this.hiredDogList.forEach(chatbox => {
          if (chatbox.dogName === dogObject.dogName) {
            // TODO push and update also dogMesages
            chatbox.dogLastMessage = dogObject.dogLastMessage
          }
        })
      }
    },

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
      this.jackRabbit.newMessage('Is this thing turned on? lorem ipsum In this revised example, the ChildComponent emits an update-message event with the new message, and the ParentComponent listens for this event and updates its message data property accordingly. This is the recommended way to communicate changes from a child component back to its parent in Vue 3.')
      this.updateChatlog(this.jackRabbit)
    },

    testUpdate2 () {
      this.jackRabbit.newMessage('This is my second message!')
    },

    testLog () {
      console.log(this.hiredDogList)
    }
  }
}
</script>
