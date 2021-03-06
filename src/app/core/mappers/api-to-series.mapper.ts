import { Injectable } from '@angular/core';

import { Serie } from '../models/serie.model';

@Injectable({
  providedIn: 'root',
})
export class ApiToSeriesMapper {
  //? Mapping of the data brought by the getSerie service.
  public mapSerie(apiSeri: any): Serie {
    const result = apiSeri.data.results[0];

    return {
      title: result.title,
      description: result.description,
      startYear: result.startYear,
      endYear: result.endYear,
      modified: result.modified,
      thumbnail: {
        path: result.thumbnail.path,
        extension: result.thumbnail.extension,
      },
      creators: {
        items: result.creators.items.map((creator: any) => {
          return {
            name: creator.name,
            role: creator.role,
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
        items: result.comics.items.map((comic: any) => {
          return {
            resourceURI: comic.resourceURI,
            name: comic.name,
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
