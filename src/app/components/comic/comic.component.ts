import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ComicService } from 'src/app/core/services/comic.service';
import { Comic } from 'src/app/core/models/comic.model';

@Component({
  selector: 'marvel-comic',
  templateUrl: './comic.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComicComponent implements OnInit, OnDestroy {
  public id: number | any;
  public comic: Comic | any;

  constructor(
    private comicService: ComicService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.activatedRoute.params.subscribe(({ id }) => {
      this.id = id;
    });

    this.comicService
      .getComic(this.id)
      .subscribe((comic) => (this.comic = comic));
  }

  ngOnDestroy(): void {
    this.id = undefined;
    this.comic = undefined;
  }

  // Method
  public redirect(url: string, id: string): void {
    this.router.navigate([url, id.split('/').pop()]);
  }
}
