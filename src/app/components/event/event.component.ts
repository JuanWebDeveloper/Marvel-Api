import { Location } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EventService } from 'src/app/core/services/event.service';

@Component({
  selector: 'marvel-event',
  templateUrl: './event.component.html',
})
export class EventComponent implements OnInit, OnDestroy {
  public id: number | any;
  public event: Event | any;
  public loading: boolean = true;

  constructor(
    private eventService: EventService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.activatedRoute.params.subscribe(({ id }) => {
      this.id = id;
    });

    this.eventService.getEvent(this.id).subscribe((event) => {
      this.event = event;
      this.loading = false;
    });
  }

  ngOnDestroy(): void {
    this.id = undefined;
    this.event = undefined;
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
