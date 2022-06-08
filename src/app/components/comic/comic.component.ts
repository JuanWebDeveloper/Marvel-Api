import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ComicService } from 'src/app/core/services/comic.service';
import { Comic } from 'src/app/core/models/comic.model';
import { Location } from '@angular/common';

@Component({
  selector: 'marvel-comic',
  templateUrl: './comic.component.html',
})
export class ComicComponent implements OnInit, OnDestroy {
  public id: number | any;
  public comic: Comic | any;
  public loading: boolean = true;

  constructor(
    private comicService: ComicService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.activatedRoute.params.subscribe(({ id }) => {
      this.id = id;
    });

    this.comicService.getComic(this.id).subscribe((comic) => {
      this.comic = comic;
      this.loading = false;
    });
  }

  ngOnDestroy(): void {
    this.id = undefined;
    this.comic = undefined;
    this.loading = true;
  }

  // Method
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
