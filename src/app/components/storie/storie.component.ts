import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { StorieService } from '../../core/services/storie.service';
import { Storie } from 'src/app/core/models/storie.model';
import { Location } from '@angular/common';

@Component({
  selector: 'marvel-storie',
  templateUrl: './storie.component.html',
})
export class StorieComponent implements OnInit, OnDestroy {
  private id: string | any;
  public storie: Storie | any;
  public loading: boolean = true;

  constructor(
    private storieService: StorieService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
    });

    this.storieService.getStorie(this.id).subscribe((storie: Storie) => {
      this.storie = storie;
      this.loading = false;
    });
  }

  //? Handling of component disassembly.
  ngOnDestroy(): void {
    this.id = undefined;
    this.storie = undefined;
    this.loading = true;
  }

  //? Methods.
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
