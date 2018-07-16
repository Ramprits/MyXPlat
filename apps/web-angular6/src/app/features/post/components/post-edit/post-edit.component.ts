import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { CategoryService } from '../../../shared/category.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  @ViewChild('name') name = TemplateRef;
  @ViewChild('title') title = TemplateRef;
  @ViewChild('categories') categories = TemplateRef;
  categoriesList: any[];
  constructor(private _cs: CategoryService) {}

  ngOnInit() {
    setTimeout(() => {
      this._cs.getCategories().subscribe(res => {
        debugger;
        this.categoriesList = res;
      });
    }, 1000);
  }
}
