import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ApiToSeriesMapper } from '../mappers/api-to-series.mapper';
import { Serie } from '../models/serie.model';

@Injectable({
  providedIn: 'root',
})
export class SerieService {
  private headers: HttpHeaders;

  constructor(
    private http: HttpClient,
    private apiToSeriesMapper: ApiToSeriesMapper
  ) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
  }

  //? Service to fetch the data of a Serie.
  getSerie(idSerie: string): Observable<Serie> {
    console.log(
      `${environment.apiUrl}series/${idSerie}${environment.requestParams}`
    );

    return this.http
      .get(
        `${environment.apiUrl}series/${idSerie}${environment.requestParams}`,
        {
          headers: this.headers,
        }
      )
      .pipe(map((response: any) => this.apiToSeriesMapper.mapSerie(response)));
  }
}
