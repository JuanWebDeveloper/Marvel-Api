import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'marvel-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
