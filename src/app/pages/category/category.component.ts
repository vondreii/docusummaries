import { Component, OnInit } from '@angular/core';
import { DocumentaryService } from '../../services/documentary.service';
import { TagService } from '../../services/tag.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { Category, Documentary, Tag } from 'src/app/models/models';
import { Offline } from '../../models/global';

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
  tagsInCategory: Array<Tag> = [];
  documentariesList: Array<Documentary> = [];

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
    this.getAllTags().then(() => {
      this.getCurrentCategory().then(() => {
        this.getAllDocos();
      });
    });
  }

  async getAllTags() {
    // Find the current tag of the page (eg, find if the user selected 'aircrash'). 
    let tagsList = [];
    if (Offline) {
      tagsList = this.tagService.readFromLocalStorage();
    }
    else {
      tagsList = await this.tagService.readFromDB();
    }
    // Only get the tags for this category
    this.tagsInCategory = this.tagService.getTagsForCategory(tagsList, "id-"+this.categorylinkRoute);
  }

  async getCurrentCategory() {
    // Find the current category of the page (eg, find if the user selected 'health'). 
    if (Offline) {
      this.currentCategory = this.categoryService.getCategoryEntryOffline("id-"+this.categorylinkRoute);
    }
    else {
      this.categoryService.getCategoryEntry("id-"+this.categorylinkRoute).then(category => {
        this.currentCategory = category;
        this.currentCategory.id = "id-"+this.categorylinkRoute;
        console.log("Entered: " + this.currentCategory.name);
      });
    }
  }

  async getAllDocos() {
    // Gets a list of all docos for a specific category
    let allDocos = [];
    if (Offline) {
      // Reads from local storage
      allDocos = this.docoService.readFromLocalStorage();
      this.documentariesList = this.docoService.getAllDocosForCategoryOffline(allDocos, this.currentCategory);
    }
    else {
      // Reads from firebase
      allDocos = await this.docoService.readFromDB();
      this.documentariesList = this.docoService.getAllDocosForCategory(allDocos, this.currentCategory);
    }
  }
}
