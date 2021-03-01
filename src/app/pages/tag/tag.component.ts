import { Component, OnInit } from '@angular/core';
import { DocumentaryService } from '../../services/documentary.service';
import { TagService } from '../../services/tag.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { Category, Documentary, Tag } from 'src/app/models/models';
import { Offline } from 'src/app/models/global';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  // The current category we are viewing
  currentCategory: Category = {name: "", description: "", link: "", id: ""};
  currentTag: Tag = {name: "", link: "", id: "", category: "", docos: []};

  // For the url at the top
  tagLinkRoute: string;
  categoryLinkRoute: string;

  // Tag and documentary data from DB
  documentariesList: Array<Documentary> = [];
  docoIds: Array<string> = [];


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
    this.currentCategory = {name: "", description: "", link: "", id: ""};
    this.docoIds = [];
    this.documentariesList = []; // Test resetting the list of docos displayed

    // Get the url from the window
    let url = window.location.href;
    this.tagLinkRoute = this.tagService.getUrlDirectory(url);
    this.categoryLinkRoute = this.categoryService.getUrlDirectory(url, true);

    // Get the current category/tag, a list of all documentaries
    this.getCurrentTagAndDocos().then(() => {
      this.getCurrentCategory();
    });
  }

  async getCurrentTagAndDocos() {
    // Find the current tag of the page (eg, find if the user selected 'aircrash'). 
    if (Offline) {
      this.currentTag = this.tagService.getTagEntryOffline("id-"+this.tagLinkRoute);
    }
    else {
      this.tagService.getTagEntry("id-"+this.tagLinkRoute).then(tag => {
        this.currentTag = tag;
        this.currentTag.id = "id-"+this.tagLinkRoute;
        this.docoIds = this.currentTag.docos;
        this.getCurrentCategory();
        this.getAllDocos();
      });
    }
  }

  async getAllDocos() {
    // Gets a list of all docos for a specific tag
    let allDocos = [];
    if (Offline) {
      // Reads from local storage
      allDocos = this.docoService.readFromLocalStorage();
      this.documentariesList = this.docoService.getAllDocosForTagOffline(allDocos, this.currentTag.id);
    }
    else {
      // Reads from firebase
      this.documentariesList = this.docoService.getAllDocosForTag(this.docoIds);
    }
  }

  async getCurrentCategory() {
    // Find the current category of the page (eg, find if the user selected 'health').
    if (Offline) {
      this.currentCategory = this.categoryService.getCategoryEntryOffline("id-"+this.categoryLinkRoute);
    }
    else {
      this.categoryService.getCategoryEntry("id-"+this.categoryLinkRoute).then(category => {
        this.currentCategory = category;
        this.currentCategory.id = "id-"+this.tagLinkRoute;
      });
    } 
  }
}
