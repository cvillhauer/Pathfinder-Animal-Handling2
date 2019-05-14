import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Modifier } from '../model/modifier';

@Injectable({
    providedIn: 'root'
})
export class ModifierService {
    private modifiersUrl = 'api/modifiers';

    constructor(private http: HttpClient) {

    }

    getModifiers(): Observable<Modifier[]> {
        return this.http.get<Modifier[]>(this.modifiersUrl);
    }

    getModifier(id: string): Observable<Modifier> {
        return this.http.get<Modifier>(this.modifiersUrl + '/' + id);
    }
}
