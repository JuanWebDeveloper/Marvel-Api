import { Injectable } from '@angular/core';

import { Comic } from '../models/comic.model';

@Injectable({
  providedIn: 'root',
})
export class ApiToComicsMapper {
  //? Mapping of the data brought by the getComic service.
  public mapComic(apiComic: any): Comic {
    const result = apiComic.data.results[0];

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
    };
  }
}
