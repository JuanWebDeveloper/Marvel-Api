import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ApiToCreatorsMapper } from '../mappers/api-to-creators.mapper';
import { Creator } from 'src/app/core/models/creator.model';

@Injectable({
  providedIn: 'root',
})
export class CreatorService {
  private headers: HttpHeaders;

  constructor(
    private http: HttpClient,
    private apiToCreatorsMapper: ApiToCreatorsMapper
  ) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
  }

  //? Service to fetch the data of a creator.
  getCreator(idCreator: string): Observable<Creator> {
    return this.http
      .get(
        `${environment.apiUrl}creators/${idCreator}${environment.requestParams}`,
        {
          headers: this.headers,
        }
      )
      .pipe(
        map((response: any) => this.apiToCreatorsMapper.mapCreator(response))
      );
  }
}
