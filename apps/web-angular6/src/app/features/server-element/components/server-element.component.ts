import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html'
})
export class ServerElementComponent implements OnInit {

  serverElements = [
    {
      name: 'test server',
      content: 'test content'
    }
  ];
  @Input() element: { name: string; content: string };
  constructor() {}

  ngOnInit() {}
}
