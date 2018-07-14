import { Component, OnInit } from '@angular/core';
import { CommentsService } from './comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html'
})
export class CommentsComponent implements OnInit {
  comments: any[];
  isLoading = false;
  constructor(private _cs: CommentsService) {}

  ngOnInit() {
    this.isLoading = true;

    setTimeout(() => {
      this._cs.getComments().subscribe(comment => {
        this.comments = comment;
        this.isLoading = false;
      });
    }, 1000);
  }
}
