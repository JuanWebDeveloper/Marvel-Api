import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CharacterService } from '../../core/services/character.service';
import { Character } from '../../core/models/character.model';

@Component({
  selector: 'marvel-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterComponent implements OnInit {
  public tabs = [
    { title: 'Info', icon: 'info' },
    { title: 'Comics', icon: 'book-open' },
    { title: 'Series', icon: 'film' },
  ];
  public tabSelected: string | undefined;
  public id: number | any;
  public character: Character | undefined;

  constructor(
    private characterService: CharacterService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.tabSelected = this.tabs[0].title;

    this.characterService
      .getCharacter(this.id)
      .subscribe((character: Character) => (this.character = character));
  }

  onTabSelected(tab: string): void {
    this.tabSelected = tab;
  }
}
