import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ApiToEventsMapper } from '../mappers/api-to-events.mapper';
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private headers: HttpHeaders;

  constructor(
    private http: HttpClient,
    private apiToEventsMapper: ApiToEventsMapper
  ) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
  }

  //? Service to fetch the data of a event.
  getSerie(idEvent: string): Observable<Event> {
    return this.http
      .get(
        `${environment.apiUrl}events/${idEvent}${environment.requestParams}`,
        {
          headers: this.headers,
        }
      )
      .pipe(map((response: any) => this.apiToEventsMapper.mapEvent(response)));
  }
}
