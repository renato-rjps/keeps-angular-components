import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'kp-filter',
  templateUrl: './kp-filter.component.html',
  styleUrls: ['./kp-filter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class KpFilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('init');
  }

}
