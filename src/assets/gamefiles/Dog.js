/* eslint-disable no-unused-vars */
export class Dog {
  dogName = 'Unknown name' // FINAL

  dogId = '0'// FINAL

  dogPortrait = 'unknown' // FINAL

  dogPersonality = {
    good: 0,
    evil: 0,
    smart: 0,
    dumb: 0
  }

  dogSkills = {
    piloting: 0,
    pistols: 0,
    rifles: 0,
    strategy: 0,
    charisma: 0,
    leadership: 0
  }

  dogMessages = [] // FINAL
  dogLastMessage = '' // FINAL
  dogUnreadMessages = 0 // FINAL

  constructor (
    dogName = 'Unknown Dog',
    dogPortrait = 'unknown',
    dogPersonalityGood = 0,
    dogPersonalityEvil = 0,
    dogPersonalitySmart = 0,
    dogPersonalityDumb = 0,
    dogSkillPiloting = 0,
    dogSkillPistols = 0,
    dogSkillRifles = 0,
    dogSkillStrategy = 0,
    dogSkillCharisma = 0,
    dogSkillLeadership = 0
  ) {
    this.dogName = dogName
    this.dogPortrait = dogPortrait
    this.dogPersonalityGood = dogPersonalityGood
    this.dogPersonalityEvil = dogPersonalityEvil
    this.dogPersonalitySmart = dogPersonalitySmart
    this.dogPersonalityDumb = dogPersonalityDumb
    this.dogSkillPiloting = dogSkillPiloting
    this.dogSkillPistols = dogSkillPistols
    this.dogSkillRifles = dogSkillRifles
    this.dogSkillStrategy = dogSkillStrategy
    this.dogSkillCharisma = dogSkillCharisma
    this.dogSkillLeadership = dogSkillLeadership
  }

  newMessage (message) {
    const currentTime = new Date()
    const dogName = this.dogName
    this.dogMessages.push({ dogName, message, currentTime })
    this.dogLastMessage = message
    this.dogUnreadMessages++
  }

  newPlayerReply (message) {
    const currentTime = new Date()
    const player = 'player'
    this.dogMessages.push({ player, message, currentTime })
    this.dogLastMessage = message
    // TODO: Use the first parameter of the dogMessages objects to determine styling and identification of individual chat replies
  }

  // TODO: Implement Unread Messages counter that resets after Chatblock clicking
}

/**
 * Notes:
 *
 * Everything marked as FINAL cannot be changed or deleted at risk of breaking the application
 */
