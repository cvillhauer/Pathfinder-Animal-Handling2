import {
  Size, CreatureType, Alignment, DamageType, AttackType, SpecialAbility, Feat, Skill, Spell
} from '../model/enums';
import { AbilityScores } from '../model/abilityscores';
import { Saves } from '../model/saves';
import { Creature } from '../model/creature';
import { Attack } from '../model/attack';
import { ArmorClass } from '../model/armorClass';
import { Speeds } from '../model/speed';
import { SkillBonus } from '../model/skillbonus';
import { SpellLikeAbility } from '../model/spellLikeAbility';

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
