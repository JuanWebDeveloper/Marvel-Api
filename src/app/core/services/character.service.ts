import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

//? Models.
import { Character } from '../models/character.model';
import { Comic } from '../models/comic.model';

import { environment } from 'src/environments/environment';
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

  //? Service to obtain the data of various characters.
  getCharacters(): Observable<Character[]> {
    return this.http
      .get(`${environment.apiUrl}characters${environment.requestParams}`, {
        headers: this.headers,
      })
      .pipe(
        map((response: any) => {
          return this.apiToCharactersMapper.map(response);
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
        map((response: any) => this.apiToCharactersMapper.mapOne(response))
      );
  }

  //? Service to fetch the data of a comic.
  getComic(idComic: string): Observable<Comic> {
    return this.http
      .get(
        `${environment.apiUrl}comics/${idComic}${environment.requestParams}`,
        {
          headers: this.headers,
        }
      )
      .pipe(
        map((response: any) => this.apiToCharactersMapper.mapComic(response))
      );
  }
}
