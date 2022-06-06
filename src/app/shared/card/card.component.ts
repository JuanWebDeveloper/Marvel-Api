import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'marvel-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() public id: number | any;
  @Input() public name: string | undefined;
  @Input() public thumbnail: string | undefined;

  constructor(private router: Router) {}

  public seeMore(): void {
    this.router.navigate(['/character', this.id]);
  }
}
