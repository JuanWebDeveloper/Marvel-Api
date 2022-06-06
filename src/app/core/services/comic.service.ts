import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ApiToComicsMapper } from '../mappers/api-to-comics.mapper';
import { Comic } from '../models/comic.model';

@Injectable({
  providedIn: 'root',
})
export class ComicService {
  private headers: HttpHeaders;

  constructor(
    private http: HttpClient,
    private apiToComicsMapper: ApiToComicsMapper
  ) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
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
      .pipe(map((response: any) => this.apiToComicsMapper.mapComic(response)));
  }
}
