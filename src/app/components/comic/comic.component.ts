import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CharacterService } from 'src/app/core/services/character.service';

@Component({
  selector: 'marvel-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComicComponent implements OnInit {
  constructor(
    private characterService: CharacterService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}
}
