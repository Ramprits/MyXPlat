import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  isEdit: boolean = false;
  posts: Post[];
  constructor(private _ps: PostService) {}

  ngOnInit() {
    setTimeout(() => {
      this._ps.getPosts().subscribe(res => {
        this.posts = res;
      });
    }, 1000);
  }
  onAddedPost() {
    this.isEdit = true;
  }
}
