import { defineStore } from 'pinia'
import { Dog } from '@/data/Dog'
import { hiredDogList } from '@/data/DOG_LIST'

export const useHiredDogsStore = defineStore('hiredDogsStore', {
  state: () => ({

    hiredDogs: hiredDogList // TODO: Update hiredDogs to blank to be filled during gameplay

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

    async getDBHiredDogs () {
      const res = await fetch('http://localhost:3000/hiredDogs')
      const data = await res.json()
      this.hiredDogs = data
    },

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
    }

    //             ///////////////////////////////////////////////////
    //             /////////////////                         /////////
    //             /////////////////        TEST AREA        /////////
    //             /////////////////                         /////////
    //             ///////////////////////////////////////////////////

  }
})

// async addDogToDB () {
//   const exampleDog = new Dog(
//     '4',
//     'Papa Dogs',
//     'femrab2',
//     86,
//     10,
//     76,
//     8,
//     90,
//     18,
//     4,
//     48,
//     60,
//     21
//   )

//   const res = await fetch('http://localhost:3000/hiredDogs', {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json'
//     },
//     body: JSON.stringify(exampleDog)
//   })
// },

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
