import { defineStore } from 'pinia'
import { Dog } from '@/assets/gamefiles/Dog'
import { hiredDogList } from '@/assets/gamefiles/DOG_LIST'

export const useHiredDogsStore = defineStore('hiredDogsStore', {
  state: () => ({

    hiredDogs: hiredDogList,
    dogId: 0

  }),

  getters: {

    unreadDogs () : number {
      // "this" refers to the STATE object above
      return this.hiredDogs.reduce((counter, dog) => {
        return dog.dogUnreadMessages ? ++counter : counter
      }, 0)
    },

    getHiredDogs () : Dog[] {
      return this.hiredDogs
    }
  },

  actions: {

    // ///////////////////////////////////////////////////////////////
    // /////////////////                         /////////////////////
    // /////////////////        Chat List        /////////////////////
    // /////////////////                         /////////////////////
    // ///////////////////////////////////////////////////////////////

    isExistingDog (dogName: string) {
      const newDogResult = this.hiredDogs.some(dogChat => dogChat.dogName === dogName)
      return newDogResult
    },

    updateChatlog (dogObject : Dog, newMessage: string) {
      dogObject.newMessage(newMessage)
      if (!this.isExistingDog(dogObject.dogName)) {
        this.hiredDogs.push(dogObject)
      }
    },

    //             ///////////////////////////////////////////////////
    //             /////////////////                         /////////
    //             /////////////////        TEST AREA        /////////
    //             /////////////////                         /////////
    //             ///////////////////////////////////////////////////

    testUpdate (receivedDog: Dog) {
      this.updateChatlog(receivedDog, 'Is this thing turned on? lorem ipsum In this revised example, the ChildComponent emits an update-message event with the new message, and the ParentComponent listens for this event and updates its message data property accordingly. This is the recommended way to communicate changes from a child component back to its parent in Vue 3.')
    },

    testUpdate2 (receivedDog: Dog) {
      this.updateChatlog(receivedDog, 'This is my second message!')
    },

    testLog () {
      console.log(this.hiredDogs)
    }

  }
})

// {
//   dogId: '1',
//   dogName: 'Magpie Latte',
//   dogPortrait: 'fembir18',
//   dogMessages: [],
//   dogLastMessage: '',
//   dogUnreadMessages: 0,

//   dogPersonality: {
//     good: 0,
//     evil: 0,
//     smart: 0,
//     dumb: 0
//   },
//   dogSkills: {
//     piloting: 0,
//     pistols: 0,
//     rifles: 0,
//     strategy: 0,
//     charisma: 0,
//     leadership: 0
//   }
// },
// {
//   dogId: '2',
//   dogName: 'Mona Macaxx',
//   dogPortrait: 'femmon19',
//   dogMessages: [],
//   dogLastMessage: 'I\'m Pinia!',
//   dogUnreadMessages: 1,

//   dogPersonality: {
//     good: 0,
//     evil: 0,
//     smart: 0,
//     dumb: 0
//   },
//   dogSkills: {
//     piloting: 0,
//     pistols: 0,
//     rifles: 0,
//     strategy: 0,
//     charisma: 0,
//     leadership: 0
//   }
// },
// {
//   dogId: '3',
//   dogName: 'Tab Romboy',
//   dogPortrait: 'femrab2',
//   dogMessages: [],
//   dogLastMessage: '',
//   dogUnreadMessages: 1,

//   dogPersonality: {
//     good: 0,
//     evil: 0,
//     smart: 0,
//     dumb: 0
//   },
//   dogSkills: {
//     piloting: 0,
//     pistols: 0,
//     rifles: 0,
//     strategy: 0,
//     charisma: 0,
//     leadership: 0
//   }
// }
