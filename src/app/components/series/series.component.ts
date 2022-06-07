import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SerieService } from '../../core/services/serie.service';
import { Serie } from '../../core/models/serie.model';

@Component({
  selector: 'marvel-series',
  templateUrl: './series.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeriesComponent implements OnInit {
  public id: number | any;
  public serie: Serie | any;

  constructor(
    private serieService: SerieService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.activatedRoute.params.subscribe(({ id }) => {
      this.id = id;
    });

    this.serieService
      .getSerie(this.id)
      .subscribe((serie) => (this.serie = serie));
  }

  ngOnDestroy(): void {
    this.id = undefined;
    this.serie = undefined;
  }

  // Method
  public redirect(url: string, id: string): void {
    this.router.navigate([url, id.split('/').pop()]);
  }
}
