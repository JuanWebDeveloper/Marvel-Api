import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ComicService } from 'src/app/core/services/comic.service';
import { Comic } from 'src/app/core/models/comic.model';

@Component({
  selector: 'marvel-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComicComponent implements OnInit {
  public id: number | any;
  public comic: Comic | any;

  constructor(
    private comicService: ComicService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.id = id;
    });

    this.comicService
      .getComic(this.id)
      .subscribe((comic) => (this.comic = comic));
  }
}
