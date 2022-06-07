import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { StorieService } from '../../core/services/storie.service';
import { Storie } from 'src/app/core/models/storie.model';

@Component({
  selector: 'marvel-storie',
  templateUrl: './storie.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StorieComponent implements OnInit {
  private id: string | any;
  public storie: Storie | any;

  constructor(
    private storieService: StorieService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
    });

    this.storieService
      .getStorie(this.id)
      .subscribe((storie: Storie) => (this.storie = storie));
  }

  //? Handling of component disassembly.
  ngOnDestroy(): void {
    this.id = undefined;
  }

  //? Methods.
  public toReturn(): void {
    this.router.navigate(['/home']);
  }

  public redirect(url: string, id: string): void {
    this.router.navigate([url, id.split('/').pop()], {
      queryParams: { ciwc: this.id },
    });
  }
}
