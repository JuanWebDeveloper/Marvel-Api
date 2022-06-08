import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CharacterService } from '../../core/services/character.service';
import { Character } from '../../core/models/character.model';
import { Location } from '@angular/common';

@Component({
  selector: 'marvel-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
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
  public loading: boolean = true;

  constructor(
    private characterService: CharacterService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.tabSelected = this.tabs[0].title;

    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
    });

    this.characterService
      .getCharacter(this.id)
      .subscribe((character: Character) => {
        this.character = character;
        this.loading = false;
      });
  }

  //? Handling of component disassembly.
  ngOnDestroy(): void {
    this.tabSelected = this.tabs[0].title;
    this.id = undefined;
    this.character = undefined;
    this.loading = true;
  }

  //? Methods.
  public onTabSelected(tab: string): void {
    this.tabSelected = tab;
  }

  public handleToBack(): void {
    const pathUrl: any = localStorage.getItem('pathUrl');
    const pathUrlObj = JSON.parse(pathUrl);

    const currentUrl: string = this.location.path().split('/')[1];
    const currentUrlId: string = this.location.path().split('/')[2];
    localStorage.setItem(
      'pathUrl',
      JSON.stringify({ pathUrl: currentUrl, id: currentUrlId })
    );

    if (pathUrlObj.id) {
      this.router.navigate([pathUrlObj.pathUrl, pathUrlObj.id]);
    } else {
      this.router.navigate([pathUrlObj.pathUrl]);
    }
  }

  public redirect(url: string, id: string): void {
    this.handleToBack();
    this.router.navigate([url, id.split('/').pop()]);
  }
}
