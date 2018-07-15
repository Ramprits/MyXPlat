import { Component, OnInit } from '@angular/core';

import { BaseComponent } from '@myworkspace/core';

@Component({
  selector: 'foo-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent extends BaseComponent implements OnInit {
  serverElements = [
    {
      name: 'test server',
      content: 'test content'
    }
  ];
  constructor() {
    super();
  }

  ngOnInit() {}
}
