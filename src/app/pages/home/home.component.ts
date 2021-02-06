import { Component, OnInit } from '@angular/core';
import { TagService } from '../../services/tag.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { Offline } from '../../models/global';

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
    private categoryService: CategoryService,
    private route: ActivatedRoute,
  ) { 
    // params is the :id (unique value) from the link (eg 'aircrash' from /categories/aircrash). 
    this.route.params.subscribe(params => {
      this.listItems();
    });
  }

  // Read and Store Categories and Tags
  ngOnInit(): void {
    this.listItems();
  }

  listItems() {
    this.getCategoryList().then(() => {
      this.getTagsList();
    });
  }

  // Get a list of all categories
  async getCategoryList() {
    if (Offline) {
      this.categoryList = await this.categoryService.readFromLocalStorage();
    }
    else {
      this.categoryList = await this.categoryService.readFromDB();
    }
  }

  // Get a list of all tags
  async getTagsList() {
    if (Offline) {
      this.tagsList = await this.tagService.readFromLocalStorage();
    }
    else {
      this.tagsList = await this.tagService.readFromDB();
    }
  }
}
