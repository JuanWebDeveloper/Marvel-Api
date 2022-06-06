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
}
