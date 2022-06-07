import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EventService } from 'src/app/core/services/event.service';

@Component({
  selector: 'marvel-event',
  templateUrl: './event.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventComponent implements OnInit {
  public id: number | any;
  public event: Event | any;

  constructor(
    private eventService: EventService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.activatedRoute.params.subscribe(({ id }) => {
      this.id = id;
    });

    this.eventService
      .getEvent(this.id)
      .subscribe((event) => (this.event = event));
  }

  ngOnDestroy(): void {
    this.id = undefined;
    this.event = undefined;
  }

  // Method
  public redirect(url: string, id: string): void {
    this.router.navigate([url, id.split('/').pop()]);
  }
}
