import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ApiToCharactersMapper } from '../mappers/api-to-characters.mapper';
import { Character } from '../models/character.model';

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

  //? Service to obtain the data of various characters.
  getCharacters(): Observable<Character[]> {
    return this.http
      .get(
        `${environment.apiUrl}characters${environment.requestParams}&limit=60&orderBy=name`,
        {
          headers: this.headers,
        }
      )
      .pipe(
        map((response: any) => {
          return this.apiToCharactersMapper.mapCharacters(response);
        })
      );
  }

  //? Service to fetch the data of a character.
  getCharacter(id: number): Observable<Character> {
    return this.http
      .get(
        `${environment.apiUrl}characters/${id}${environment.requestParams}`,
        {
          headers: this.headers,
        }
      )
      .pipe(
        map((response: any) =>
          this.apiToCharactersMapper.mapCharacter(response)
        )
      );
  }
}
