import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss'],
})
export class TestingComponent implements OnInit {

  counter = 0;

  constructor() {
  }

  ngOnInit() {
  }

  increaseCounter() {
    ++this.counter;
  }
}
