import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  serverElements = [
    {
      name: 'test server Ramprit Sahani',
      content: 'test content 123'
    }
  ];

  constructor() {}
}
