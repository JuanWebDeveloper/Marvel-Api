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
        description: apiCharacter.description,
        modified: apiCharacter.modified,
        thumbnail: {
          path: apiCharacter.thumbnail.path,
          extension: apiCharacter.thumbnail.extension,
        },
        comics: {
          available: apiCharacter.comics.available,
          items: apiCharacter.comics.items.map((comic: any) => {
            return {
              resourceURI: comic.resourceURI,
              name: comic.name,
            };
          }),
        },
        series: {
          available: apiCharacter.series.available,
          items: apiCharacter.series.items.map((serie: any) => {
            return {
              resourceURI: serie.resourceURI,
              name: serie.name,
            };
          }),
        },
        stories: {
          available: apiCharacter.stories.available,
          items: apiCharacter.stories.items.map((story: any) => {
            return {
              resourceURI: story.resourceURI,
              name: story.name,
            };
          }),
        },
        events: {
          available: apiCharacter.events.available,
          items: apiCharacter.events.items.map((event: any) => {
            return {
              resourceURI: event.resourceURI,
              name: event.name,
            };
          }),
        },
      };

      return character;
    });
  }
}
