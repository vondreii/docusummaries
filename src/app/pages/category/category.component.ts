import { Component, OnInit } from '@angular/core';
import { DocumentaryService } from '../../services/documentary.service';
import { TagService } from '../../services/tag.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { Category } from 'src/app/models/models';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  // The current category we are viewing
  currentCategory: Category = {name: "", link: "", id: ""};

  // For the url at the top
  categorylinkRoute: string;

  // List of tags and docos for this category
  tagsList: any;
  documentariesList: any;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private tagService: TagService,
    private docoService: DocumentaryService
  ) { 
    // params is the :id (unique value) from the link (eg 'aircrash' from /categories/aircrash). 
    this.route.params.subscribe(params => {
      this.listDocos();
    });
  }

  ngOnInit(): void {
    // Provide a list of documentaries
    this.listDocos();
  }

  listDocos() {
    // Resets page on reload
    this.currentCategory = {name: "", link: "", id: ""};

    // Get the url from the window
    let url = window.location.href;
    this.categorylinkRoute = this.categoryService.getUrlDirectory(url, false);

    // Get the current category, a list of all documentaries and tags
    this.documentariesList = this.docoService.readFromDB();
    this.getAllTags().then(() => {
      this.getCurrentCategory();
    });
  }

  async getAllTags() {
    // Find the current tag of the page (eg, find if the user selected 'aircrash'). 
    this.tagsList = await this.tagService.readFromDB();
  }

  async getCurrentCategory() {
    // Find the current category of the page (eg, find if the user selected 'health'). 
    this.categoryService.getCategoryEntry("id-"+this.categorylinkRoute).then(category => {
      this.currentCategory = category;
      this.currentCategory.id = "id-"+this.categorylinkRoute;
      console.log("Entered: " + this.currentCategory.name);
    });
  }
}
