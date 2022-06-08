import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SerieService } from '../../core/services/serie.service';
import { Serie } from '../../core/models/serie.model';
import { Location } from '@angular/common';

@Component({
  selector: 'marvel-series',
  templateUrl: './series.component.html',
})
export class SeriesComponent implements OnInit, OnDestroy {
  public id: number | any;
  public serie: Serie | any;
  public loading: boolean = true;

  constructor(
    private serieService: SerieService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.activatedRoute.params.subscribe(({ id }) => {
      this.id = id;
    });

    this.serieService.getSerie(this.id).subscribe((serie) => {
      this.serie = serie;
      this.loading = false;
    });
  }

  ngOnDestroy(): void {
    this.id = undefined;
    this.serie = undefined;
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
      JSON.stringify({ pathUr: currentUrl, id: currentUrlId })
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
