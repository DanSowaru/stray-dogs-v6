/* eslint-disable no-unused-vars */
export class Dog {
  dogId = '0'; // FINAL
  dogName = 'Unknown name'; // FINAL
  dogPortrait = 'unknown'; // FINAL
  dogPersonality: {
    good: number;
    evil: number;
    smart: number;
    dumb: number;
  };

  dogSkills: {
    piloting: number;
    pistols: number;
    rifles: number;
    strategy: number;
    charisma: number;
    leadership: number;
  };

  dogMessages: Array<{ dogName?: string; player?: string; message: string; currentTime: Date }> = []; // FINAL
  dogLastMessage = ''; // FINAL
  dogUnreadMessages = 0; // FINAL

  constructor (
    dogId?: string,
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
    this.dogPersonality = {
      good: dogPersonalityGood,
      evil: dogPersonalityEvil,
      smart: dogPersonalitySmart,
      dumb: dogPersonalityDumb
    }
    this.dogSkills = {
      piloting: dogSkillPiloting,
      pistols: dogSkillPistols,
      rifles: dogSkillRifles,
      strategy: dogSkillStrategy,
      charisma: dogSkillCharisma,
      leadership: dogSkillLeadership
    }
  }

  newMessage (message: string): void {
    const currentTime = new Date()
    const dogName = this.dogName
    this.dogMessages.push({ dogName, message, currentTime })
    this.dogLastMessage = message
    this.dogUnreadMessages++
  }

  newPlayerReply (message: string): void {
    const currentTime = new Date()
    const player = 'player'
    this.dogMessages.push({ player, message, currentTime })
    this.dogLastMessage = message
    // TODO: Use the first parameter of the dogMessages objects to determine styling and identification of individual chat replies
  }
}

// TODO: Implement Unread Messages counter that resets after Chatblock clicking

/**
 * Notes:
 *
 * Everything marked as FINAL cannot be changed or deleted at risk of breaking the application
 */
