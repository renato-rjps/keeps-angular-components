import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kp-filter',
  templateUrl: './kp-filter.component.html',
  styleUrls: ['./kp-filter.component.css']
})
export class KpFilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('init');
  }

}