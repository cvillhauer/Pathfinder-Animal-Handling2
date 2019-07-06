import {
  Size, CreatureType, Alignment, DamageType, AttackType, SpecialAbility
} from '../model/enums';
import { AbilityScores } from '../model/abilityscores';
import { Saves } from '../model/saves';
import { Creature } from '../model/creature';
import { Attack } from '../model/attack';
import { ArmorClass } from '../model/armorClass';
import { Speeds } from '../model/speed';

export const outsiders: Creature[] = [
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
