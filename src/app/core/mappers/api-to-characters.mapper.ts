import { Injectable } from '@angular/core';

import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root',
})
export class ApiToCharactersMapper {
  //? Mapping of the data brought by the getCharacters service.
  public mapCharacters(apiCharacters: any): Character[] {
    return apiCharacters.data.results.map((apiCharacter: any) => {
      const character: Character = {
        id: apiCharacter.id,
        name: apiCharacter.name,
        thumbnail: {
          path: apiCharacter.thumbnail.path,
          extension: apiCharacter.thumbnail.extension,
        },
      };

      return character;
    });
  }

  //? Mapping of the data brought by the getCharacter service.
  public mapCharacter(apiCharacter: any): Character {
    const result = apiCharacter.data.results[0];

    const character: Character = {
      id: result.id,
      name: result.name,
      description: result.description,
      modified: result.modified,
      thumbnail: {
        path: result.thumbnail.path,
        extension: result.thumbnail.extension,
      },
      comics: {
        available: result.comics.available,
        items: result.comics.items.map((comic: any) => {
          return {
            resourceURI: comic.resourceURI,
            name: comic.name,
          };
        }),
      },
      series: {
        available: result.series.available,
        items: result.series.items.map((serie: any) => {
          return {
            resourceURI: serie.resourceURI,
            name: serie.name,
          };
        }),
      },
      stories: {
        available: result.stories.available,
        items: result.stories.items.map((story: any) => {
          return {
            resourceURI: story.resourceURI,
            name: story.name,
          };
        }),
      },
      events: {
        available: result.events.available,
        items: result.events.items.map((event: any) => {
          return {
            resourceURI: event.resourceURI,
            name: event.name,
          };
        }),
      },
    };

    return character;
  }
}
