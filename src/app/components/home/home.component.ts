import { Component, OnInit } from '@angular/core';

import { CharacterService } from '../../core/services/character.service';
import { Character } from '../../core/models/character.model';

@Component({
  selector: 'marvel-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public characters: Character[] | undefined;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService
      .getCharacters()
      .subscribe((characters: Character[]) => (this.characters = characters));
  }
}
