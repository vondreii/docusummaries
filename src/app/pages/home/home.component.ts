import { Component, OnInit } from '@angular/core';
import { TagService } from '../../services/tag.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Data taken directly from Dabatase
  categoryList: any;
  tagsList: any;
  
  constructor(
    private tagService: TagService,
    private categoryService: CategoryService
  ) { }

  // Read and Store Categories and Tags
  ngOnInit(): void {
    this.getCategoryList();
    this.getTagsList();
  }

  async getCategoryList() {
    this.categoryList = await this.categoryService.readFromDB();
  }
  async getTagsList() {
    this.tagsList = await this.tagService.readFromDB();
  }
}
