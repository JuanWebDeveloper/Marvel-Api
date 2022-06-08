import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { CreatorService } from '../../core/services/creator.service';
import { Creator } from 'src/app/core/models/creator.model';

@Component({
  selector: 'marvel-creator',
  templateUrl: './creator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreatorComponent implements OnInit {
  public id: number | any;
  public creator: Creator | any;

  constructor(
    private creatorService: CreatorService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.activatedRoute.params.subscribe(({ id }) => {
      this.id = id;
    });

    this.creatorService
      .getCreator(this.id)
      .subscribe((creator) => (this.creator = creator));
  }

  ngOnDestroy(): void {
    this.id = undefined;
    this.creator = undefined;
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
