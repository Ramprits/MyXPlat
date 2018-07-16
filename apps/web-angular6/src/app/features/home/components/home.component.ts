import { Component, OnInit } from '@angular/core';

import { BaseComponent } from '@myworkspace/core';
import { HomeService } from './home.service';

@Component({
  selector: 'foo-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent extends BaseComponent implements OnInit {
  serverElements: { name: string; content: string }[];

  constructor(private _hs: HomeService) {
    super();
  }

  ngOnInit() {
    setTimeout(() => {
      this.serverElements = this._hs.serverElements;
      console.log(this.serverElements);
    }, 1000);
  }
}
