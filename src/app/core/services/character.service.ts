import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Character } from '../models/character.model';
import { ApiToCharactersMapper } from '../mappers/api-to-characters.mapper';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private headers: HttpHeaders;

  constructor(
    private http: HttpClient,
    private apiToCharactersMapper: ApiToCharactersMapper
  ) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
  }

  getCharacters(): Observable<Character[]> {
    return this.http
      .get(`${environment.apiUrl}${environment.requestParams}`, {
        headers: this.headers,
      })
      .pipe(
        map((response: any) => {
          return this.apiToCharactersMapper.map(response);
        })
      );
  }
}
