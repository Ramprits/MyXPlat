import { OnDestroy, OnInit } from '@angular/core';

// libs
import { Subject } from 'rxjs';

export abstract class BaseComponent implements OnDestroy , OnInit {
  ngOnInit(): void {
  }
  public destroy$: Subject<any> = new Subject();

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
