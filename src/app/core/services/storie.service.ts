import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ApiToStoriesMapper } from '../mappers/api-to-stories.mapper';
import { Storie } from '../models/storie.model';

@Injectable({
  providedIn: 'root',
})
export class StorieService {
  private headers: HttpHeaders;

  constructor(
    private http: HttpClient,
    private apiToStoriesMapper: ApiToStoriesMapper
  ) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
  }

  //? Service to fetch the data of a Storie.
  getStorie(idStorie: string): Observable<Storie> {
    return this.http
      .get(
        `${environment.apiUrl}stories/${idStorie}${environment.requestParams}`,
        {
          headers: this.headers,
        }
      )
      .pipe(
        map((response: any) => this.apiToStoriesMapper.mapStorie(response))
      );
  }
}
