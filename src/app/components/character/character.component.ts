import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CharacterService } from '../../core/services/character.service';
import { Character } from '../../core/models/character.model';

@Component({
  selector: 'marvel-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterComponent implements OnInit, OnDestroy {
  public tabs = [
    { title: 'omics', icon: 'fa-solid fa-c' },
    { title: 'eries', icon: 'fa-solid fa-s' },
    { title: 'tories', icon: 'fa-solid fa-s' },
    { title: 'vents', icon: 'fa-solid fa-e' },
  ];
  public tabSelected: string | undefined;
  public id: number | any;
  public character: Character | any;

  constructor(
    private characterService: CharacterService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.tabSelected = this.tabs[0].title;

    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
    });

    this.characterService
      .getCharacter(this.id)
      .subscribe((character: Character) => (this.character = character));
  }

  //? Handling of component disassembly.
  ngOnDestroy(): void {
    this.tabSelected = this.tabs[0].title;
    this.id = undefined;
    this.character = undefined;
  }

  //? Methods.
  public onTabSelected(tab: string): void {
    this.tabSelected = tab;
  }

  public seeComic(url: string): void {
    this.router.navigate(['/comic', url.split('/').pop()]);
  }
}
