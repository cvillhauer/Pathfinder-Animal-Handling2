import { Size, CreatureType, DamageType, AttackType, Spell, Shape, Save } from '../model/enums';
import { AbilityScores } from '../model/abilityscores';
import { Saves } from '../model/saves';
import { Creature } from '../model/creature';
import { Attack } from '../model/attack';
import { ArmorClass } from '../model/armorClass';
import { Speeds } from '../model/speed';
import { SkillBonus } from '../model/skillbonus';
import { SpellLikeAbility } from '../model/spellLikeAbility';
import { Feat } from '../model/feat';
import { Alignment } from '../model/alignment';
import { Skill } from '../model/skill';
import { SpecialAbility } from '../model/specialAbility';
import { AdditionalDamage } from '../model/additionalDamage';
import { BreathWeapon } from '../model/breathWeapon';
import { SavingThrow } from '../model/savingThrow';

export const outsiders: Creature[] = [
  new Creature(
    'dretch',
    'Dretch',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Dretch',
    'https://sites.google.com/site/pathfinderogc/_/rsrc/1487036773117/images/dretch-jr.png',
    Size.Small,
    CreatureType.Outsider,
    Alignment.chaoticEvil,
    new Speeds(20),
    5,
    new AbilityScores(12, 10, 14, 5, 11, 11),
    2,
    18,
    new ArmorClass(14, 11, 14),
    2,
    12,
    2,
    2,
    0,
    new Saves(5, 0, 3),
    [Feat.Toughness],
    [
      new SkillBonus(Skill.EscapeArtist, 5),
      new SkillBonus(Skill.Perception, 5),
      new SkillBonus(Skill.Stealth, 9)
    ],
    [
      new Attack('Claw', 4, '1d4', 1, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Slashing]),
      new Attack('Claw', 4, '1d4', 1, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Slashing]),
      new Attack('Bite', 4, '1d4', 1, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing])
    ],
    [SpecialAbility.Darkvision, SpecialAbility.DamageResistanceColdIron5, SpecialAbility.DamageResistanceGood5,
    SpecialAbility.ImmuneElectricity, SpecialAbility.ImmunePoison,
    SpecialAbility.ResistAcid10, SpecialAbility.ResistCold10, SpecialAbility.ResistFire10],
    [
      new SpellLikeAbility(2, 'once per day', Spell.CauseFear, 11),
      new SpellLikeAbility(2, 'once per day', Spell.StinkingCloud, 13)
    ]
  ),

  new Creature(
    'hellhound',
    'Hell Hound',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Hell%20Hound',
    'https://i.pinimg.com/236x/0d/8c/1a/0d8c1a7fe23223efe9d45b8bb236e03e--playing-cards-roman.jpg',
    Size.Medium,
    CreatureType.Outsider,
    Alignment.lawfulEvil,
    new Speeds(40),
    5,
    new AbilityScores(13, 13, 15, 6, 10, 6),
    4,
    30,
    new ArmorClass(16, 11, 15),
    5,
    16,
    4,
    3,
    0,
    new Saves(6, 5, 1),
    [Feat.ImprovedInititive, Feat.Run],
    [
      new SkillBonus(Skill.Acrobatics, 8),
      new SkillBonus(Skill.Perception, 7),
      new SkillBonus(Skill.Stealth, 13),
      new SkillBonus(Skill.Survival, 7)
    ],
    [
      new Attack('Bite', 5, '1d8', 1, false, AttackType.Melee,
        [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing], [], [new AdditionalDamage('1d6', 0, DamageType.Fire)]),
      new Attack('Breath Weapon', null, '', 0, false, AttackType.AreaOfEffect, [],
        [new BreathWeapon(Shape.Cone10, new AdditionalDamage('2d6', 0, DamageType.Fire),
          new SavingThrow(Save.Reflex, 14), 'once every 2d4 rounds')])
    ],
    [SpecialAbility.Darkvision, SpecialAbility.Scent, SpecialAbility.ImmuneFire, SpecialAbility.VulnerableCold]
  ),
  new Creature(
    'houndarchon',
    'Hound Archon',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Hound%20Archon',
    'http://fc08.deviantart.net/fs51/f/2009/298/9/6/Hound_Archon_for_Paizo_by_MichaelJaecks.jpg',
    Size.Medium,
    CreatureType.Outsider,
    Alignment.lawfulGood,
    new Speeds(40),
    5,
    new AbilityScores(15, 10, 13, 10, 13, 12),
    6,
    39,
    new ArmorClass(19, 10, 19),
    8,
    18,
    6,
    4,
    15,
    new Saves(6, 5, 5),
    [Feat.ImprovedInititive, Feat.IronWill, Feat.PowerAttack],
    [
      new SkillBonus(Skill.Acrobatics, 9),
      new SkillBonus(Skill.Intimidate, 10),
      new SkillBonus(Skill.Perception, 10),
      new SkillBonus(Skill.SenseMotive, 10),
      new SkillBonus(Skill.Stealth, 13),
      new SkillBonus(Skill.Survival, 14)
    ],
    [
      new Attack('Greatsword', 9, '2d6', 3, false, AttackType.Melee, [DamageType.Slashing]),
      new Attack('Greatsword', 4, '2d6', 3, false, AttackType.Melee, [DamageType.Slashing]),
      new Attack('Bite', 3, '1d8', 2, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing])
    ],
    [SpecialAbility.Darkvision, SpecialAbility.LowLightVision, SpecialAbility.Scent,
    SpecialAbility.DamageResistanceEvil10, SpecialAbility.ImmuneElectricity, SpecialAbility.ImmunePetrification],
    [
      new SpellLikeAbility(6, 'constant', Spell.DetectEvil),
      new SpellLikeAbility(6, 'constant', Spell.MagicCircleAgainstEvil),
      new SpellLikeAbility(6, 'at will', Spell.Aid),
      new SpellLikeAbility(6, 'at will', Spell.ContinualFlame),
      new SpellLikeAbility(6, 'at will', Spell.Message)
    ]
  ),
  new Creature(
    'lanternarchon',
    'Lantern Archon',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Lantern%20Archon',
    'https://i.pinimg.com/originals/4f/b9/4c/4fb94c890c480f240f9af0cb49852357.png',
    Size.Small,
    CreatureType.Outsider,
    Alignment.lawfulGood,
    new Speeds(0, 0, 60),
    5,
    new AbilityScores(1, 11, 12, 6, 11, 10),
    2,
    13,
    new ArmorClass(15, 11, 15),
    -4,
    6,
    2,
    2,
    0,
    new Saves(4, 3, 0),
    [Feat.ImprovedInititive],
    [
      new SkillBonus(Skill.Diplomacy, 5),
      new SkillBonus(Skill.Fly, 14),
      new SkillBonus(Skill.KnowledgePlanes, 3),
      new SkillBonus(Skill.Perception, 4),
      new SkillBonus(Skill.SenseMotive, 5)
    ],
    [
      new Attack('Light Ray', 3, '1d6', 0, true, AttackType.Ranged, [DamageType.Force]),
      new Attack('Light Ray', 3, '1d6', 0, true, AttackType.Ranged, [DamageType.Force])
    ],
    [SpecialAbility.Darkvision, SpecialAbility.LowLightVision, SpecialAbility.DamageResistanceEvil10,
    SpecialAbility.ImmuneElectricity, SpecialAbility.ImmunePetrification],
    [
      new SpellLikeAbility(3, 'at will', Spell.Aid),
      new SpellLikeAbility(3, 'at will', Spell.AuraOfMenace, 13),
      new SpellLikeAbility(3, 'at will', Spell.ContinualFlame),
      new SpellLikeAbility(3, 'at will', Spell.DetectEvil)
    ]
  ),
  new Creature(
    'lemure',
    'Lemure',
    'https://aonprd.com/MonsterDisplay.aspx?ItemName=Lemure',
    'https://i.pinimg.com/originals/4b/82/aa/4b82aae8c0b1bbeed9ad5da890abb744.png',
    Size.Medium,
    CreatureType.Outsider,
    Alignment.lawfulEvil,
    new Speeds(20),
    5,
    new AbilityScores(11, 10, 12, 0, 11, 5),
    2,
    13,
    new ArmorClass(14, 10, 14),
    2,
    12,
    2,
    1,
    0,
    new Saves(4, 3, 0),
    [],
    [],
    [new Attack('Claw', 2, '1d4', 0, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Slashing]),
    new Attack('Claw', 2, '1d4', 0, false, AttackType.Melee, [DamageType.Bludgeoning, DamageType.Slashing])],
    [SpecialAbility.Darkvision, SpecialAbility.SeeInDarkness,
    SpecialAbility.ImmuneMindAffecting, SpecialAbility.ImmuneFire, SpecialAbility.ImmunePoison,
    SpecialAbility.DamageResistanceGood5, SpecialAbility.DamageResistanceSilver5, SpecialAbility.ResistAcid10, SpecialAbility.ResistCold10]
  )
];
