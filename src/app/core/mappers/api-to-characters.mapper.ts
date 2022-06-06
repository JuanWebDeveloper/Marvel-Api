import { Injectable } from '@angular/core';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root',
})
export class ApiToCharactersMapper {
  public map(apiCharacters: any): Character[] {
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

  public mapOne(apiCharacter: any): Character {
    console.log(apiCharacter.data.results[0]);

    const character: Character = {
      id: apiCharacter.data.results[0].id,
      name: apiCharacter.data.results[0].name,
      description: apiCharacter.data.results[0].description,
      modified: apiCharacter.data.results[0].modified,
      thumbnail: {
        path: apiCharacter.data.results[0].thumbnail.path,
        extension: apiCharacter.data.results[0].thumbnail.extension,
      },
      comics: {
        available: apiCharacter.data.results[0].comics.available,
        items: apiCharacter.data.results[0].comics.items.map((comic: any) => {
          return {
            resourceURI: comic.resourceURI,
            name: comic.name,
          };
        }),
      },
      series: {
        available: apiCharacter.data.results[0].series.available,
        items: apiCharacter.data.results[0].series.items.map((serie: any) => {
          return {
            resourceURI: serie.resourceURI,
            name: serie.name,
          };
        }),
      },
      stories: {
        available: apiCharacter.data.results[0].stories.available,
        items: apiCharacter.data.results[0].stories.items.map((story: any) => {
          return {
            resourceURI: story.resourceURI,
            name: story.name,
          };
        }),
      },
      events: {
        available: apiCharacter.data.results[0].events.available,
        items: apiCharacter.data.results[0].events.items.map((event: any) => {
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
