import { Injectable } from '@angular/core';

import { Storie } from '../models/storie.model';

@Injectable({
  providedIn: 'root',
})
export class ApiToStoriesMapper {
  //? Mapping of the data brought by the getStorie service.
  public mapStorie(apiStories: any): Storie {
    const result = apiStories.data.results[0];

    return {
      title: result.title,
      description: result.description,
      modified: result.modified,
      thumbnail: {
        path: result.thumbnail.path,
        extension: result.thumbnail.extension,
      },
      creators: {
        items: result.creators.items.map((creator: any) => {
          return {
            resourceURI: creator.resourceURI,
            name: creator.name,
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
      series: {
        items: result.series.items.map((serie: any) => {
          return {
            resourceURI: serie.resourceURI,
            name: serie.name,
          };
        }),
      },
      comics: {
        items: result.comics.items.map((comic: any) => {
          return {
            resourceURI: comic.resourceURI,
            name: comic.name,
          };
        }),
      },
      events: {
        items: result.events.items.map((event: any) => {
          return {
            resourceURI: event.resourceURI,
            name: event.name,
          };
        }),
      },
    };
  }
}
