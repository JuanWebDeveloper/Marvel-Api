import { Injectable } from '@angular/core';

import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root',
})
export class ApiToEventsMapper {
  //? Mapping of the data brought by the getEvent service.
  public mapEvent(apiEvent: any): Event {
    const result = apiEvent.data.results[0];

    return {
      title: result.title,
      description: result.description,
      modified: result.modified,
      start: result.start,
      end: result.end,
      thumbnail: {
        path: result.thumbnail.path,
        extension: result.thumbnail.extension,
      },
      creators: {
        items: result.creators.items.map((creator: any) => {
          return {
            name: creator.name,
            role: creator.role,
            resourceURI: creator.resourceURI,
          };
        }),
      },
      characters: {
        items: result.characters.items.map((character: any) => {
          return {
            resourceURI: character.resourceURI,
            name: character.name,
          };
        }),
      },
      comics: {
        items: result.comics.items.map((event: any) => {
          return {
            resourceURI: event.resourceURI,
            name: event.name,
          };
        }),
      },
      series: {
        items: result.series.items.map((serie: any) => {
          return {
            resourceURI: serie.resourceURI,
            name: serie.name,
          };
        }),
      },
      stories: {
        items: result.stories.items.map((storie: any) => {
          return {
            resourceURI: storie.resourceURI,
            name: storie.name,
          };
        }),
      },
    };
  }
}
