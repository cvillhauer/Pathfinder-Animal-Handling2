import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Creature } from '../model/creature';
import { Attack } from '../model/attack';
import { IAttackEffect } from '../model/attackeffect';
import { SkillBonus } from '../model/skillbonus';

@Injectable({
  providedIn: 'root'
})
export class CreatureService {
  private creaturesUrl = 'api/creatures';

  constructor(private http: HttpClient) {

  }

  getCreatures(): Observable<Creature[]> {
    return this.http.get<Creature[]>(this.creaturesUrl);
  }

  getCreature(id: string): Observable<Creature> {
    return this.http.get<Creature>(this.creaturesUrl + '/' + id);
  }

  getCreaturesFromCreatureList(creatureList: string[]): Observable<Creature[]> {
    return this.http.get<Creature[]>(this.creaturesUrl).pipe(
      map(creatures => {
        const filteredCreatures = creatures.filter(creature => creatureList.indexOf(creature.id) > -1);
        const returnCreatures: Creature[] = [];
        filteredCreatures.map(c => {
          const newCreature = Creature.fromObject(c);
          newCreature.skills = this.buildSkills(c.skills);
          newCreature.attacks = this.buildAttacks(c.attacks);
          returnCreatures.push(newCreature);
        });
        return returnCreatures;
      })
    );
  }

  private buildSkills(creatureSkills: SkillBonus[]): SkillBonus[] {
    const skills: SkillBonus[] = [];
    creatureSkills.map(s => {
      const newSkill = SkillBonus.fromObject(s);
      skills.push(newSkill);
    });
    return skills;
  }

  private buildAttacks(creatureAttacks: Attack[]): Attack[] {
    const attacks: Attack[] = [];
    creatureAttacks.map(a => {
      const newAttack = Attack.fromObject(a);
      newAttack.attackEffects = this.buildAttackEffects(a.attackEffects);
      attacks.push(newAttack);
    });
    return attacks;
  }

  private buildAttackEffects(attackEffects: IAttackEffect[]): IAttackEffect[] {
    const effects: IAttackEffect[] = [];
    attackEffects.map(ae => {
      effects.push(ae);
    });
    return effects;
  }
}
