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
    { title: 'omics', icon: 'fa-solid fa-c' },
    { title: 'eries', icon: 'fa-solid fa-s' },
    { title: 'tories', icon: 'fa-solid fa-s' },
    { title: 'vents', icon: 'fa-solid fa-e' },
  ];
  public tabSelected: string | undefined;
  public id: number | any;
  character: Character | Character | any;

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
