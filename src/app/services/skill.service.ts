import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Skill } from '../model/skill';

@Injectable({
    providedIn: 'root'
})
export class SkillService {
    private skillsUrl = "api/skills";

    constructor(private http: HttpClient) {

    }

    getCreatures(): Observable<Skill[]> {
        return this.http.get<Skill[]>(this.skillsUrl);
    }

    getCreature(id: string): Observable<Skill> {
        return this.http.get<Skill>(this.skillsUrl + "/" + id);
    }
}