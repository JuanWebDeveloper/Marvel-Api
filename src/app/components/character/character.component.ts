import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'marvel-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterComponent implements OnInit {
  tabs = [
    { title: 'Info', icon: 'info' },
    { title: 'Comics', icon: 'book-open' },
    { title: 'Series', icon: 'film' },
  ];
  tabSelected: string | undefined;

  constructor() {}

  ngOnInit(): void {
    this.tabSelected = this.tabs[0].title;
  }

  onTabSelected(tab: string): void {
    this.tabSelected = tab;
  }
}
