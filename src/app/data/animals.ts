import {
  Size, CreatureType, Skill, Alignment, Modifier,
  DamageType, AttackType, AbilityEffectType, Save, Feat, SpecialAbility
} from '../model/enums';
import { AbilityScores } from '../model/abilityscores';
import { Saves } from '../model/saves';
import { Creature } from '../model/creature';
import { Attack } from '../model/attack';
import { SavingThrow } from '../model/savingThrow';
import { AbilityEffect } from '../model/abilityEffect';
import { Grab, Trip, Pull, DeathRoll, Constrict } from '../model/combatManeuvers';
import { Disease } from '../model/disease';
import { Poison } from '../model/poison';
import { ArmorClass } from '../model/armorClass';
import { SkillBonus } from '../model/skillbonus';
import { SwallowWhole } from '../model/swallowWhole';
import { Speeds } from '../model/speed';
import { Trample } from '../model/trample';

export const animals: Creature[] = [
  new Creature(
    'ape',
    'Ape',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Gorilla',
    'https://pathfinderwiki.com/mediawiki/images/thumb/1/15/Gorilla.jpg/250px-Gorilla.jpg',
    Size.Large,
    CreatureType.Animal,
    Alignment.trueNeutral,
    new Speeds(30, 30),
    10,
    new AbilityScores(15, 15, 14, 2, 12, 7),
    3,
    19,
    new ArmorClass(14, 11, 12),
    5,
    17,
    new Saves(7, 5, 2),
    [Feat.GreatFortitude, Feat.SkillFocusPerception],
    [
      new SkillBonus(Skill.Acrobatics, 6),
      new SkillBonus(Skill.Climb, 14),
      new SkillBonus(Skill.Perception, 8)
    ],
    [
      new Attack('Slam', 3, '1d6', 2, false, AttackType.Melee, [DamageType.Bludgeoning]),
      new Attack('Slam', 3, '1d6', 2, false, AttackType.Melee, [DamageType.Bludgeoning])
    ],
    [SpecialAbility.LowLightVision]
  ),
  new Creature(
    'auroch',
    'Auroch',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Aurochs',
    'http://www.historyofinformation.com/images/3501a%20Large.jpg',
    Size.Large,
    CreatureType.Animal,
    Alignment.trueNeutral,
    new Speeds(40),
    5,
    new AbilityScores(23, 10, 17, 2, 11, 4),
    3,
    22,
    new ArmorClass(13, 9, 13),
    9,
    19,
    new Saves(6, 3, 1),
    [Feat.Endurance, Feat.SkillFocusPerception],
    [new SkillBonus(Skill.Perception, 9)],
    [
      new Attack('Gore', 7, '1d8', 9, false, AttackType.Melee, [DamageType.Piercing]),
      new Attack('Trample', null, '', 0, false, AttackType.Melee, [], [new Trample('2d6', 9, 17)])
    ],
    [SpecialAbility.LowLightVision, SpecialAbility.Scent, SpecialAbility.Stampede]
  ),
  new Creature(
    'boar',
    'Boar',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Boar',
    'http://www.killershrike.com/Fate/Fae/Pathfinder/Content/Characters/Animals/images/Boar.jpg',
    Size.Medium,
    CreatureType.Animal,
    Alignment.trueNeutral,
    new Speeds(40),
    5,
    new AbilityScores(17, 10, 17, 2, 13, 4),
    2,
    18,
    new ArmorClass(14, 10, 14),
    4,
    14,
    new Saves(6, 3, 1),
    [Feat.Toughness],
    [new SkillBonus(Skill.Perception, 6)],
    [new Attack('Gore', 4, '1d8', 4, false, AttackType.Melee, [DamageType.Piercing])],
    [SpecialAbility.LowLightVision, SpecialAbility.Scent, SpecialAbility.Ferocity]
  ),
  new Creature(
    'cheetah',
    'Cheetah',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Cheetah',
    'https://img00.deviantart.net/bf17/i/2012/238/a/0/cheetah_running_by_prodigyduck-d5chize.jpg',
    Size.Medium,
    CreatureType.Animal,
    Alignment.trueNeutral,
    new Speeds(50),
    5,
    new AbilityScores(17, 19, 15, 2, 12, 6),
    3,
    19,
    new ArmorClass(15, 14, 11),
    5,
    19,
    new Saves(5, 7, 2),
    [Feat.ImprovedInititive, Feat.WeaponFinesse],
    [
      new SkillBonus(Skill.Acrobatics, 8),
      new SkillBonus(Skill.Perception, 5),
      new SkillBonus(Skill.Stealth, 8),
      new SkillBonus(Skill.Stealth, 12, 'In Tall Grass')
    ],
    [
      new Attack('Bite', 6, '1d6', 3, false, AttackType.Melee,
        [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing], [new Trip(5)]),
      new Attack('Claw', 6, '1d3', 3, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Slashing]),
      new Attack('Claw', 6, '1d3', 3, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Slashing])
    ],
    [SpecialAbility.LowLightVision, SpecialAbility.Scent, SpecialAbility.Sprint]
  ),
  new Creature(
    'constrictorsnake',
    'Constrictor Snake',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Constrictor%20Snake',
    'http://www.heliocentric.com.au/images/titanaboa.jpg?crc=253069396',
    Size.Medium,
    CreatureType.Animal,
    Alignment.trueNeutral,
    new Speeds(20, 20, 0, 20),
    5,
    new AbilityScores(17, 17, 12, 1, 12, 2),
    3,
    19,
    new ArmorClass(15, 13, 12),
    5,
    18,
    new Saves(4, 6, 2),
    [Feat.SkillFocusPerception, Feat.Toughness],
    [
      new SkillBonus(Skill.Acrobatics, 15),
      new SkillBonus(Skill.Climb, 11),
      new SkillBonus(Skill.Perception, 12),
      new SkillBonus(Skill.Stealth, 11),
      new SkillBonus(Skill.Swim, 11)
    ],
    [new Attack('Bite', 5, '1d4', 4, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing],
      [new Grab(9), new Constrict(9, '1d4', 4)])],
    [SpecialAbility.Scent]
  ),
  new Creature(
    'crocodile',
    'Crocodile',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Crocodile',
    'https://78.media.tumblr.com/864cd2f022509d7f566ca9c4fd60cd4a/tumblr_o0n2mahH761uqhshmo1_1280.png',
    Size.Large,
    CreatureType.Animal,
    Alignment.trueNeutral,
    new Speeds(20, 0, 0, 30),
    5,
    new AbilityScores(19, 12, 17, 1, 12, 2),
    3,
    22,
    new ArmorClass(14, 10, 13),
    7,
    18,
    new Saves(6, 4, 2),
    [Feat.SkillFocusPerception, Feat.SkillFocusStealth],
    [
      new SkillBonus(Skill.Perception, 8),
      new SkillBonus(Skill.Stealth, 5),
      new SkillBonus(Skill.Stealth, 13, 'In Water'),
      new SkillBonus(Skill.Swim, 12)
    ],
    [
      new Attack('Bite', 5, '1d8', 4, false, AttackType.Melee,
        [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing],
        [new Grab(11), new DeathRoll(11, '1d8', 6)]),
      new Attack('Tail Slap', 0, '1d12', 2, false, AttackType.Melee, [DamageType.Bludgeoning])
    ],
    [SpecialAbility.LowLightVision, SpecialAbility.Sprint]
  ),
  new Creature(
    'direbat',
    'Dire Bat',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Dire%20Bat',
    'https://s-media-cache-ak0.pinimg.com/originals/59/0d/ee/590deeb0b5a84ccfb5466a643b134df4.jpg',
    Size.Large,
    CreatureType.Animal,
    Alignment.trueNeutral,
    new Speeds(20, 0, 40),
    5,
    new AbilityScores(17, 15, 13, 2, 14, 6),
    4,
    22,
    new ArmorClass(14, 11, 12),
    7,
    19,
    new Saves(5, 6, 3),
    [Feat.Alertness, Feat.Stealthy],
    [
      new SkillBonus(Skill.Fly, 9),
      new SkillBonus(Skill.Perception, 12),
      new SkillBonus(Skill.Perception, 16, 'with Blindsense'),
      new SkillBonus(Skill.Stealth, 4)
    ],
    [new Attack('Bite', 5, '1d8', 4, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing])],
    [SpecialAbility.Blindsense]
  ),
  new Creature(
    'direrat',
    'Dire Rat',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Dire%20Rat',
    'https://pathfinderwiki.com/mediawiki/images/1/12/Dire_rat.jpg',
    Size.Small,
    CreatureType.Animal,
    Alignment.trueNeutral,
    new Speeds(40, 20, 0, 20),
    5,
    new AbilityScores(10, 17, 12, 2, 12, 4),
    1,
    5,
    new ArmorClass(14, 14, 11),
    -1,
    12,
    new Saves(3, 5, 1),
    [Feat.SkillFocusPerception],
    [
      new SkillBonus(Skill.Climb, 11),
      new SkillBonus(Skill.Perception, 4),
      new SkillBonus(Skill.Stealth, 11),
      new SkillBonus(Skill.Swim, 11)
    ],
    [
      new Attack('Bite', 1, '1d4', 0, false, AttackType.Melee,
        [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing],
        [new Disease('Filth Fever', new SavingThrow(Save.Fortitude, 11), '1d3 days', 'once per day',
          [new AbilityEffect('1d3', Modifier.Dexterity, AbilityEffectType.Damage),
          new AbilityEffect('1d3', Modifier.Constitution, AbilityEffectType.Damage)], 2)]
      )
    ],
    [SpecialAbility.LowLightVision, SpecialAbility.Scent]
  ),
  new Creature(
    'dog',
    'Dog',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Dog',
    'https://images.beastsofwar.com/2014/10/Guard-Dog.png',
    Size.Small,
    CreatureType.Animal,
    Alignment.trueNeutral,
    new Speeds(40),
    5,
    new AbilityScores(13, 13, 15, 2, 12, 6),
    1,
    6,
    new ArmorClass(13, 12, 12),
    0,
    11,
    new Saves(4, 3, 1),
    [Feat.SkillFocusPerception],
    [
      new SkillBonus(Skill.Acrobatics, 1),
      new SkillBonus(Skill.Acrobatics, 9, 'Jumping'),
      new SkillBonus(Skill.Perception, 8),
      new SkillBonus(Skill.Survival, 1),
      new SkillBonus(Skill.Survival, 5, 'Scent Tracking')
    ],
    [
      new Attack('Bite', 2, '1d4', 1, false, AttackType.Melee,
        [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing])
    ],
    [SpecialAbility.LowLightVision, SpecialAbility.Scent]
  ),
  new Creature(
    'dolphin',
    'Dolphin',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Dolphin',
    'http://d2ydh70d4b5xgv.cloudfront.net/images/f/5/safari-ltd-monterey-bay-aquarium-sea-life-collection-bottlenose-dolphin-f2383e6f99e01e61cd2371b00314e98c.jpg',
    Size.Medium,
    CreatureType.Animal,
    Alignment.trueNeutral,
    new Speeds(0, 0, 0, 80),
    5,
    new AbilityScores(12, 15, 13, 2, 12, 6),
    2,
    11,
    new ArmorClass(13, 12, 11),
    2,
    14,
    new Saves(4, 5, 1),
    [Feat.WeaponFinesse],
    [
      new SkillBonus(Skill.Perception, 9),
      new SkillBonus(Skill.Swim, 13)
    ],
    [new Attack('Slam', 3, '1d4', 1, false, AttackType.Melee, [DamageType.Bludgeoning])],
    [SpecialAbility.Blindsight, SpecialAbility.LowLightVision]
  ),
  new Creature(
    'eagle',
    'Eagle',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Eagle',
    'http://www.killershrike.com/Fate/Fae/Pathfinder/Content/Characters/Animals/images/EagleLarge.jpg',
    Size.Small,
    CreatureType.Animal,
    Alignment.trueNeutral,
    new Speeds(10, 0, 80, 0),
    5,
    new AbilityScores(10, 15, 12, 2, 15, 7),
    1,
    5,
    new ArmorClass(14, 13, 12),
    -1,
    11,
    new Saves(3, 4, 2),
    [Feat.WeaponFinesse],
    [
      new SkillBonus(Skill.Fly, 8),
      new SkillBonus(Skill.Perception, 10)
    ],
    [
      new Attack('Talon', 3, '1d4', 0, false, AttackType.Melee, [DamageType.Slashing]),
      new Attack('Talon', 3, '1d4', 0, false, AttackType.Melee, [DamageType.Slashing]),
      new Attack('Bite', 3, '1d4', 0, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing])
    ],
    [SpecialAbility.LowLightVision]
  ),
  new Creature(
    'electriceel',
    'Electric Eel',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Electric%20Eel',
    'https://res.cloudinary.com/uktv/image/upload/b_rgb:000000,w_880,h_495/v1394626469/q0iknfjhpzzzhajaxgie.jpg',
    Size.Small,
    CreatureType.Animal,
    Alignment.trueNeutral,
    new Speeds(5, 0, 0, 30),
    5,
    new AbilityScores(13, 14, 19, 1, 10, 6),
    2,
    17,
    new ArmorClass(15, 13, 13),
    1,
    13,
    new Saves(7, 5, 0),
    [Feat.ImprovedInititive],
    [
      new SkillBonus(Skill.EscapeArtist, 10),
      new SkillBonus(Skill.Perception, 4),
      new SkillBonus(Skill.Stealth, 10),
      new SkillBonus(Skill.Swim, 9)
    ],
    [
      new Attack('Bite', 3, '1d6', 1, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing]),
      new Attack('Tail', -2, '1d6', 0, true, AttackType.Melee, [DamageType.Electricity])
    ],
    [SpecialAbility.LowLightVision, SpecialAbility.ResistElectricity10]
  ),
  new Creature(
    'giantfrog',
    'Giant Frog',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Giant%20Frog',
    'https://vignette.wikia.nocookie.net/rythiae/images/3/35/Giant_Frog_1.jpg/revision/latest?cb=20141125110711',
    Size.Medium,
    CreatureType.Animal,
    Alignment.trueNeutral,
    new Speeds(30, 0, 0, 30),
    5,
    new AbilityScores(15, 13, 16, 1, 8, 6),
    2,
    15,
    new ArmorClass(12, 11, 11),
    3,
    14,
    new Saves(6, 6, -1),
    [Feat.LightningReflexes],
    [
      new SkillBonus(Skill.Acrobatics, 9),
      new SkillBonus(Skill.Acrobatics, 13, 'Jumping'),
      new SkillBonus(Skill.Perception, 3),
      new SkillBonus(Skill.Stealth, 5),
      new SkillBonus(Skill.Swim, 10)
    ],
    [
      new Attack('Bite', 3, '1d6', 2, false,
        AttackType.Melee, [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing], [new Grab(7)]),
      new Attack('Tongue', 3, '', 0, true, AttackType.Ranged, [], [new Grab(7), new Pull(7, 5)]),
      new Attack('Swallow Whole', 7, '1d4', 0, true, AttackType.Melee, [DamageType.Bludgeoning], [new SwallowWhole(10, 1)])
    ],
    [SpecialAbility.LowLightVision, SpecialAbility.Scent]
  ),
  new Creature(
    'goblindog',
    'Goblin Dog',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Goblin%20Dog',
    'https://orig00.deviantart.net/e5f8/f/2007/297/a/a/goblin_dog_by_njoo.jpg',
    Size.Medium,
    CreatureType.Animal,
    Alignment.trueNeutral,
    new Speeds(50),
    5,
    new AbilityScores(15, 14, 15, 2, 12, 8),
    1,
    9,
    new ArmorClass(13, 12, 11),
    2,
    14,
    new Saves(4, 4, 1),
    [Feat.Toughness],
    [new SkillBonus(Skill.Stealth, 6)],
    [new Attack('Bite', 2, '1d6', 3, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing],
      [new Disease('Allergic Reaction', new SavingThrow(Save.Fortitude, 12), 'immediate', 'once',
        [new AbilityEffect('2', Modifier.Dexterity, AbilityEffectType.Damage),
        new AbilityEffect('2', Modifier.Charisma, AbilityEffectType.Damage)],
        1)])], [SpecialAbility.ImmuneDisesase, SpecialAbility.LowLightVision, SpecialAbility.Scent]
  ),
  new Creature(
    'horse',
    'Horse',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Horse',
    'http://darkfienix.com/wp-content/uploads/2018/01/horse1.png',
    Size.Large,
    CreatureType.Animal,
    Alignment.trueNeutral,
    new Speeds(50),
    5,
    new AbilityScores(16, 14, 17, 2, 13, 7),
    2,
    15,
    new ArmorClass(11, 11, 9),
    5,
    17,
    new Saves(6, 5, 1),
    [Feat.Endurance, Feat.Run],
    [
      new SkillBonus(Skill.Perception, 6)
    ],
    [
      new Attack('Hoof', -2, '1d4', 1, false, AttackType.Melee, [DamageType.Bludgeoning]),
      new Attack('Hoof', -2, '1d4', 1, false, AttackType.Melee, [DamageType.Bludgeoning])
    ],
    [SpecialAbility.LowLightVision, SpecialAbility.Scent]
  ),
  new Creature(
    'hyena',
    'Hyena',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Hyena',
    'https://i.pinimg.com/736x/da/b1/d1/dab1d17a311616268e8af871f23f1040--hyena-harley-quinn.jpg',
    Size.Medium,
    CreatureType.Animal,
    Alignment.trueNeutral,
    new Speeds(50),
    5,
    new AbilityScores(14, 15, 15, 2, 13, 6),
    2,
    13,
    new ArmorClass(14, 12, 12),
    3,
    15,
    new Saves(5, 5, 1),
    [Feat.SkillFocusPerception],
    [
      new SkillBonus(Skill.Perception, 8),
      new SkillBonus(Skill.Stealth, 6),
      new SkillBonus(Skill.Stealth, 10, 'In Tall Grass')
    ],
    [new Attack('Bite', 3, '1d6', 3, false, AttackType.Melee,
      [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing], [new Trip(3)])],
    [SpecialAbility.LowLightVision, SpecialAbility.Scent]
  ),
  new Creature(
    'leopard',
    'Leopard',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Leopard',
    'https://i.pinimg.com/originals/b0/53/77/b053770ed5ece5ad273d8a5aba7f507e.png',
    Size.Medium,
    CreatureType.Animal,
    Alignment.trueNeutral,
    new Speeds(30, 20),
    5,
    new AbilityScores(16, 19, 15, 2, 13, 6),
    3,
    19,
    new ArmorClass(15, 14, 11),
    5,
    19,
    new Saves(5, 7, 2),
    [Feat.SkillFocusStealth, Feat.WeaponFinesse],
    [
      new SkillBonus(Skill.Acrobatics, 8),
      new SkillBonus(Skill.Climb, 11),
      new SkillBonus(Skill.Perception, 5),
      new SkillBonus(Skill.Stealth, 11),
      new SkillBonus(Skill.Stealth, 15, 'in Undergrowth')
    ],
    [
      new Attack('Bite', 6, '1d6', 3, false, AttackType.Melee,
        [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing], [new Grab(9)]),
      new Attack('Claw', 6, '1d3', 3, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Slashing]),
      new Attack('Claw', 6, '1d3', 3, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Slashing]),
      new Attack('Rake (if grappling)', 6, '1d3', 3, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Slashing]),
      new Attack('Rake (if grappling)', 6, '1d3', 3, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Slashing])
    ],
    [SpecialAbility.LowLightVision, SpecialAbility.Scent, SpecialAbility.Pounce]
  ),
  new Creature(
    'monitorlizard',
    'Monitor Lizard',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Monitor%20Lizard',
    'https://78.media.tumblr.com/7048d9a0164e8f270544c4d8e51f4258/tumblr_nw5v2y2hyk1uqhshmo1_1280.png',
    Size.Medium,
    CreatureType.Animal,
    Alignment.trueNeutral,
    new Speeds(30, 0, 0, 30),
    5,
    new AbilityScores(17, 15, 17, 2, 12, 6),
    3,
    22,
    new ArmorClass(15, 12, 13),
    5,
    17,
    new Saves(8, 5, 2),
    [Feat.GreatFortitude, Feat.SkillFocusPerception],
    [
      new SkillBonus(Skill.Climb, 7),
      new SkillBonus(Skill.Perception, 8),
      new SkillBonus(Skill.Stealth, 10),
      new SkillBonus(Skill.Stealth, 14, 'in Undergrowth'),
      new SkillBonus(Skill.Swim, 11)
    ],
    [new Attack('Bite', 5, '1d8', 4, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing],
      [new Grab(9), new Poison(new SavingThrow(Save.Fortitude, 14), 'once per hour for 6 hours',
        [new AbilityEffect('1d2', Modifier.Dexterity, AbilityEffectType.Damage)], 1)])],
    [SpecialAbility.LowLightVision, SpecialAbility.Scent]
  ),
  new Creature(
    'octopus',
    'Octopus',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Octopus',
    'https://s-media-cache-ak0.pinimg.com/originals/20/29/38/202938767c7a7befba2974ff753e8ba5.jpg',
    Size.Small,
    CreatureType.Animal,
    Alignment.trueNeutral,
    new Speeds(20, 0, 0, 30),
    5,
    new AbilityScores(12, 17, 14, 2, 13, 3),
    2,
    13,
    new ArmorClass(15, 14, 12),
    1,
    14,
    new Saves(5, 6, 1),
    [Feat.Multiattack, Feat.WeaponFinesse],
    [
      new SkillBonus(Skill.EscapeArtist, 13),
      new SkillBonus(Skill.Stealth, 20),
      new SkillBonus(Skill.Swim, 9)
    ],
    [
      new Attack('Bite', 5, '1d3', 1, false, AttackType.Melee,
        [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing],
        [new Poison(new SavingThrow(Save.Fortitude, 13), 'once per round for 6 rounds',
          [new AbilityEffect('1', Modifier.Strength, AbilityEffectType.Damage)], 1)]),
      new Attack('Tentacles (8)', 3, '', 0, false, AttackType.Melee, [DamageType.Bludgeoning], [new Grab(5)])
    ],
    [SpecialAbility.InkCloud, SpecialAbility.Jet, SpecialAbility.LowLightVision]
  ),
  new Creature(
    'poisonousfrog',
    'Poisonous Frog',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Poison%20Frog',
    'http://static2.paizo.com/image/content/PathfinderACG/PZO6818-Flybreath.jpg',
    Size.Tiny,
    CreatureType.Animal,
    Alignment.trueNeutral,
    new Speeds(10, 0, 0, 20),
    0,
    new AbilityScores(2, 12, 11, 1, 9, 10),
    1,
    4,
    new ArmorClass(13, 13, 12),
    -1,
    5,
    new Saves(2, 3, -1),
    [Feat.WeaponFinesse],
    [
      new SkillBonus(Skill.Acrobatics, 5),
      new SkillBonus(Skill.Acrobatics, 9, 'Jumping'),
      new SkillBonus(Skill.Perception, 3),
      new SkillBonus(Skill.Stealth, 13),
      new SkillBonus(Skill.Swim, 9)
    ],
    [
      new Attack('Bite', 3, '1', 0, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing],
        [
          new Poison(new SavingThrow(Save.Fortitude, 10), 'once per round for 6 rounds',
            [new AbilityEffect('1d2', Modifier.Constitution, AbilityEffectType.Damage)], 1)
        ])
    ],
    [SpecialAbility.LowLightVision]
  ),
  new Creature(
    'pony',
    'Pony',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Pony',
    'https://orig00.deviantart.net/7569/f/2013/252/4/5/tobiano_draft_horse_study_by_charreed-d6lq7pf.jpg',
    Size.Medium,
    CreatureType.Animal,
    Alignment.trueNeutral,
    new Speeds(40),
    5,
    new AbilityScores(13, 13, 14, 2, 11, 4),
    2,
    13,
    new ArmorClass(11, 11, 10),
    2,
    13,
    new Saves(5, 4, 0),
    [Feat.Endurance, Feat.Run],
    [new SkillBonus(Skill.Perception, 5)],
    [
      new Attack('Hoof', -3, '1d3', 0, false, AttackType.Melee, [DamageType.Bludgeoning]),
      new Attack('Hoof', -3, '1d3', 0, false, AttackType.Melee, [DamageType.Bludgeoning])
    ],
    [SpecialAbility.LowLightVision, SpecialAbility.Scent]
  ),
  new Creature(
    'shark',
    'Shark',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Shark',
    'https://www.tribality.com/wp-content/uploads/2015/03/safariltd-tiger-shark-211702-0.jpg',
    Size.Large,
    CreatureType.Animal,
    Alignment.trueNeutral,
    new Speeds(0, 0, 0, 60),
    5,
    new AbilityScores(17, 12, 13, 1, 12, 2),
    4,
    22,
    new ArmorClass(14, 10, 13),
    7,
    18,
    new Saves(7, 5, 2),
    [Feat.GreatFortitude, Feat.ImprovedInititive],
    [
      new SkillBonus(Skill.Perception, 8),
      new SkillBonus(Skill.Swim, 11)
    ],
    [
      new Attack('Bite', 5, '1d8', 4, false, AttackType.Melee,
        [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing])
    ],
    [SpecialAbility.Blindsense, SpecialAbility.KeenScent]
  ),
  new Creature(
    'squid',
    'Squid',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Squid',
    'https://pre00.deviantart.net/d23c/th/pre/i/2006/228/3/8/ice_element_giant_squid_by_njoo.jpg',
    Size.Medium,
    CreatureType.Animal,
    Alignment.trueNeutral,
    new Speeds(0, 0, 0, 60),
    5,
    new AbilityScores(15, 15, 11, 2, 12, 2),
    3,
    13,
    new ArmorClass(13, 12, 11),
    4,
    16,
    new Saves(3, 7, 2),
    [Feat.ImprovedInititive, Feat.LightningReflexes, Feat.Multiattack],
    [
      new SkillBonus(Skill.Perception, 7),
      new SkillBonus(Skill.Swim, 10)
    ],
    [
      new Attack('Bite', 4, '1d3', 2, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing]),
      new Attack('Tentacles (2)', 2, '1d4', 1, false, AttackType.Melee, [DamageType.Bludgeoning], [new Grab(8)])],
    [SpecialAbility.LowLightVision, SpecialAbility.InkCloud, SpecialAbility.Jet]
  ),
  new Creature(
    'viper',
    'Viper',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Viper',
    'https://pre00.deviantart.net/f3fe/th/pre/i/2015/108/b/c/cave_viper_by_bryansyme-d79yo8f.jpg',
    Size.Tiny,
    CreatureType.Animal,
    Alignment.trueNeutral,
    new Speeds(20, 20, 0, 20),
    0,
    new AbilityScores(4, 17, 8, 1, 13, 2),
    1,
    3,
    new ArmorClass(16, 15, 13),
    1,
    8,
    new Saves(1, 5, 1),
    [Feat.WeaponFinesse],
    [
      new SkillBonus(Skill.Climb, 11),
      new SkillBonus(Skill.Perception, 9),
      new SkillBonus(Skill.Stealth, 15),
      new SkillBonus(Skill.Swim, 11)
    ],
    [
      new Attack('Bite', 5, '1d2', -2, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing],
        [new Poison(new SavingThrow(Save.Fortitude, 9), 'once per round for 6 rounds',
          [new AbilityEffect('1d2', Modifier.Constitution, AbilityEffectType.Damage)], 1)])
    ],
    [SpecialAbility.LowLightVision, SpecialAbility.Scent]
  ),
  new Creature(
    'wolf',
    'Wolf',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Wolf',
    'https://vignette.wikia.nocookie.net/rollplaywestmarches/images/3/35/Worg.jpg/revision/latest?cb=20150210055421',
    Size.Medium,
    CreatureType.Animal,
    Alignment.trueNeutral,
    new Speeds(50),
    5,
    new AbilityScores(13, 15, 15, 2, 12, 6),
    2,
    13,
    new ArmorClass(14, 12, 12),
    2,
    14,
    new Saves(5, 5, 1),
    [Feat.SkillFocusPerception],
    [
      new SkillBonus(Skill.Perception, 8),
      new SkillBonus(Skill.Stealth, 6),
      new SkillBonus(Skill.Survival, 1),
      new SkillBonus(Skill.Survival, 5, 'Scent Tracking')
    ],
    [
      new Attack('Bite', 2, '1d6', 1, false, AttackType.Melee,
        [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing],
        [new Trip(2)])
    ],
    [SpecialAbility.LowLightVision, SpecialAbility.Scent]
  ),
  new Creature(
    'wolverine',
    'Wolverine',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Wolverine',
    'http://animaldiversity.org/collections/contributors/Grzimek_mammals/Mustelidae/gulo_gulo/medium.jpg',
    Size.Medium,
    CreatureType.Animal,
    Alignment.trueNeutral,
    new Speeds(30, 10, 0, 0, 10),
    5,
    new AbilityScores(15, 15, 15, 2, 12, 10),
    3,
    22,
    new ArmorClass(14, 12, 12),
    4,
    16,
    new Saves(5, 5, 2),
    [Feat.SkillFocusPerception, Feat.Toughness],
    [
      new SkillBonus(Skill.Climb, 10),
      new SkillBonus(Skill.Perception, 10)
    ],
    [
      new Attack('Claw', 4, '1d6', 2, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Slashing]),
      new Attack('Claw', 4, '1d6', 2, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Slashing]),
      new Attack('Bite', 4, '1d4', 2, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing])
    ],
    [SpecialAbility.LowLightVision, SpecialAbility.Scent, SpecialAbility.Rage]
  )
];
