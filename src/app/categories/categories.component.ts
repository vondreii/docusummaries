import { Component, OnInit } from '@angular/core';
import { TagService } from '../services/tag.service';
import { CategoryService } from '../services/category.service';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  // Data taken directly from Dabatase
  categoryList: any;
  tagsList: any;

  constructor(
    private tagService: TagService,
    private categoryService: CategoryService
  ) { }

  // Read and Store Categories and Tags
  ngOnInit(): void {
    this.categoryList = this.categoryService.readFromDB();
    this.tagsList = this.tagService.readFromDB();
  }
}
