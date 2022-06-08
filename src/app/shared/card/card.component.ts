import { Location } from '@angular/common';
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

  constructor(private router: Router, private location: Location) {}

  public seeMore(): void {
    const pathUrl: string = this.location.path().split('/')[1];
    localStorage.setItem('pathUrl', JSON.stringify({ pathUrl, id: '' }));

    this.router.navigate(['/character', this.id]);
  }
}
