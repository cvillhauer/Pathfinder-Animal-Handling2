import { Component, OnInit } from '@angular/core';
import { Character } from './model/character';
import { AbilityScores } from './model/abilityscores';
import { Alignment } from './model/alignment';
import { Speeds } from './model/speed';
import { ArmorClass } from './model/armorClass';
import { Saves } from './model/saves';
import { Feat } from './model/feat';
import { Skill } from './model/skill';
import { SkillBonus } from './model/skillbonus';
import { SpecialAbility } from './model/specialAbility';
import { SpellLikeAbility } from './model/spellLikeAbility';
import { Spell } from './model/enums';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  characters: Character[] = [];
  activeCharacter: Character;
  roundCount: number;

  ngOnInit() {
    this.roundCount = 1;
    const nirwe: Character = new Character(
      'Aldamirnirwa',
      'Druid',
      8,
      'nirwe',
      'https://www.d20pfsrd.com/classes/core-classes/druid/',
      'https://pbs.twimg.com/media/DKrrwTLXoAA6TZO.jpg',
      Alignment.trueNeutral,
      new Speeds(30),
      new AbilityScores(12, 18, 13, 12, 19, 8),
      63,
      new ArmorClass(18, 14, 14),
      7,
      21,
      6,
      0,
      new Saves(8, 7, 11),
      [Feat.NatureMagic, Feat.SpellFocusConjuration, Feat.AugmentSummoning, Feat.SuperiorSummoning],
      [new SkillBonus(Skill.Acrobatics, 4),
      new SkillBonus(Skill.Bluff, -1),
      new SkillBonus(Skill.Climb, 5),
      new SkillBonus(Skill.Diplomacy, -1),
      new SkillBonus(Skill.Disguise, -1),
      new SkillBonus(Skill.EscapeArtist, 4),
      new SkillBonus(Skill.Fly, 8),
      new SkillBonus(Skill.HandleAnimal, 7),
      new SkillBonus(Skill.Heal, 14),
      new SkillBonus(Skill.Intimidate, -1),
      new SkillBonus(Skill.KnowledGegeography, 5),
      new SkillBonus(Skill.KnowledgeNature, 14),
      new SkillBonus(Skill.Perception, 19),
      new SkillBonus(Skill.Ride, 8),
      new SkillBonus(Skill.SenseMotive, 4),
      new SkillBonus(Skill.Spellcraft, 7),
      new SkillBonus(Skill.Stealth, 4),
      new SkillBonus(Skill.Survival, 14),
      new SkillBonus(Skill.Swim, 5),
      new SkillBonus(Skill.Craft, 2)
      ],
      [], // Attacks
      [SpecialAbility.LowLightVision, SpecialAbility.ImmuneSleepEffects],
      [new SpellLikeAbility(8, 'constant', Spell.KnowDirection),
      new SpellLikeAbility(8, 'once per day', Spell.CreateWater),
      new SpellLikeAbility(8, 'seven times per day', Spell.BitOfLuck)
      ]
    );
    this.characters.push(nirwe);
    const richard: Character = new Character(
      'Richard',
      'Wizard',
      20,
      'richard',
      'https://www.d20pfsrd.com/classes/core-classes/wizard/',
      'https://vignette.wikia.nocookie.net/lotr/images/e/e7/Gandalf_the_Grey.jpg/revision/latest?cb=20121110131754',
      Alignment.lawfulEvil,
      new Speeds(30),
      new AbilityScores(10, 12, 10, 24, 10, 10),
      100,
      new ArmorClass(18, 14, 14),
      10,
      20,
      10,
      16,
      new Saves(6, 7, 12),
      [], // Feats
      [], // Skills
      [], // Attacks
      [], // Special Abilities
      [] // Spell-like Abilities
    );
    this.characters.push(richard);
    // TODO: Add more static characters with new constructor
    // const hekda: Character = new Character('hekda', 'Hekda', Alignment.chaoticGood,
    //   'Witch', 7, new AbilityScores(9, 15, 14, 19, 14, 8));
    // this.characters.push(hekda);
    // const elzaphir: Character = new Character('elzaphir', 'Elzaphir', Alignment.chaoticGood,
    //   'Sorcerer', 16, new AbilityScores(9, 15, 11, 14, 12, 24));
    // this.characters.push(elzaphir);
    // const ivanus: Character = new Character('ivanus', 'Ivanus', Alignment.neutralGood,
    //   'Ranger', 7, new AbilityScores(14, 16, 16, 10, 14, 8));
    // this.characters.push(ivanus);
    // const silvermane: Character = new Character('silvermane', 'Silvermane', Alignment.neutralGood,
    //   'Druid', 20, new AbilityScores(12, 16, 14, 12, 20, 10));
    // this.characters.push(silvermane);
  }

  nextRound() {
    this.roundCount++;
    this.characters.forEach(c => {
      for (let i = c.summonedCreatures.length - 1; i >= 0; i--) {
        const creature = c.summonedCreatures[i];
        creature.roundsLeft--;
        if (creature.roundsLeft <= 0) {
          console.log(creature.creatureName + ' is out of rounds.');
          c.summonedCreatures.splice(i, 1);
        }
      }
    });
  }

}
