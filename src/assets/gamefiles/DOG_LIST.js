/* eslint-disable prefer-const */
import { Dog } from './Dog'

// TODO: Create all the characters from the game

const CHARACTER_LIST = []

let magpieLatte = new Dog(
  'Magpie Latte', // dogName
  'fembir18', // dogPortrait
  34, // dogPersonalityGood
  65, // dogPersonalityEvil
  54, // dogPersonalitySmart
  20, // dogPersonalityDumb
  78, // dogSkillPiloting
  23, // dogSkillPistols
  12, // dogSkillRifles
  67, // dogSkillStrategy
  16, // dogSkillCharisma
  54 // dogSkillLeadership
)

magpieLatte.dogId = 1

CHARACTER_LIST.push(magpieLatte)

let monaMacaxx = new Dog(
  'Mona Macaxx', // dogName
  'femmon19', // dogPortrait
  23, // dogPersonalityGood
  53, // dogPersonalityEvil
  35, // dogPersonalitySmart
  40, // dogPersonalityDumb
  28, // dogSkillPiloting
  68, // dogSkillPistols
  89, // dogSkillRifles
  52, // dogSkillStrategy
  12, // dogSkillCharisma
  75 // dogSkillLeadership
)

monaMacaxx.dogId = 2

CHARACTER_LIST.push(monaMacaxx)

let tabRomboy = new Dog(
  'Tab Romboy', // dogName
  'femrab2', // dogPortrait
  89, // dogPersonalityGood
  15, // dogPersonalityEvil
  87, // dogPersonalitySmart
  50, // dogPersonalityDumb
  65, // dogSkillPiloting
  76, // dogSkillPistols
  36, // dogSkillRifles
  90, // dogSkillStrategy
  32, // dogSkillCharisma
  10 // dogSkillLeadership
)

tabRomboy.dogId = 3

CHARACTER_LIST.push(tabRomboy)

/** ******************************************** TEMPLATE
let newDogName = new Dog(
  '', // dogName
  '', // dogPortrait
  0, // dogPersonalityGood
  0, // dogPersonalityEvil
  0, // dogPersonalitySmart
  0, // dogPersonalityDumb
  0, // dogSkillPiloting
  0, // dogSkillPistols
  0, // dogSkillRifles
  0, // dogSkillStrategy
  0, // dogSkillCharisma
  0 // dogSkillLeadership
)

CHARACTER_LIST.push(newDogName)
*/

export { CHARACTER_LIST }
