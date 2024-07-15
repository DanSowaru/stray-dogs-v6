import { defineStore } from 'pinia'
import { Dog } from '@/data/Dog'
import { allDogsList, renato } from '@/data/DOG_LIST'

export const useHiredDogsStore = defineStore('hiredDogsStore', {
  state: () => ({
    renatoRH: renato, // this takes the static Renato from the DOG_LIST and creates a REACTIVE renato
    hiredDogs: [renato], // Placeholder to be substituted by the REACTIVE "renatoRH" at game start
    allDogs: allDogsList,
    playerMoney: 0,
    totalMessages: 0
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

    // async getDBHiredDogs () {
    //   const res = await fetch('http://localhost:3000/hiredDogs')
    //   const data = await res.json()
    //   this.hiredDogs = data
    // },

    // ///////////////////////////////////////////////////////////////
    // /////////////////                         /////////////////////
    // /////////////////        Chat List        /////////////////////
    // /////////////////                         /////////////////////
    // ///////////////////////////////////////////////////////////////

    isExistingDog (dogName: string) {
      const newDogResult = this.hiredDogs.some(dogChat => dogChat.dogName === dogName)
      return newDogResult
    },

    dogSendMessage (dog: Dog, messages: string[]) {
      // eslint-disable-next-line prefer-const
      let timeDelay = 0

      messages.forEach(message => {
        timeDelay += this.randomTimer('messageTimer')
        console.log('timedelay:' + timeDelay)
        setTimeout(() => {
          dog.newMessage(message)
          if (!this.isExistingDog(dog.dogName)) {
            this.hiredDogs.push(dog)
          }
        }, timeDelay)
        this.totalMessages++
      })
    },

    // ///////////////////////////////////////////////////////////////
    // /////////////////                         /////////////////////
    // /////////////////      NEW GAME START     /////////////////////
    // /////////////////                         /////////////////////
    // ///////////////////////////////////////////////////////////////

    newGameStart () {
      this.hiredDogs.splice(0, this.hiredDogs.length)
      this.hiredDogs = [this.renatoRH]
      this.playerMoney = 120
      renato.dogMessages = []
      renato.dogLastMessage = ''
      this.triggerGameBeginning()
    },

    // ////////////////////////////////////////////////////////////////////////
    // ////////                         ///////////////////////////////////////
    // ////////       GAME ENGINE       ///////////////////////////////////////
    // ////////                         ///////////////////////////////////////
    // ////////////////////////////////////////////////////////////////////////

    triggerGameBeginning () {
      this.dogSendMessage(this.renatoRH, [
        'Como voce ta, cachorro velho?',
        'Deve ser muita coisa pra voce absorver em pouco tempo',
        'Com voce tendo que fechar sua firma la, e agora isso...',
        'Eu sei que voce no curte muito mexer nesses aparelho',
        'mas fica tranquilo',
        'pode deixar que eu vo te ensinar a usar!'
      ])
    },

    // ///////////////////////////////////////////////////
    // ////////     GAME RANDOMIZER     //////////////////
    // ///////////////////////////////////////////////////

    randomTimer (type: string) {
      let timeValue = 0
      switch (type) {
        case 'messageTimer':
          timeValue = 1000 * this.getRandomNumber(4, 6)
      }
      return timeValue
    },

    // Returns a number inside the range of the MIN and MAX parameters passed
    getRandomNumber (min: number, max: number) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    },

    //             O-O-O-O-O-O-O-O-O-O-O-O-O-O-O-O-O-O-O-O-O-O-O-O-O-O
    //             O-O-O-O-O-O-O-O-O                         O-O-O-O-O
    //             O-O-O-O-O-O-O-O-O        TEST AREA        O-O-O-O-O
    //             O-O-O-O-O-O-O-O-O                         O-O-O-O-O
    //             O-O-O-O-O-O-O-O-O-O-O-O-O-O-O-O-O-O-O-O-O-O-O-O-O-O

    testUpdate2 (jackRabbit: Dog) {
      this.dogSendMessage(jackRabbit, ['Pinia Store test message!'])
    }
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
