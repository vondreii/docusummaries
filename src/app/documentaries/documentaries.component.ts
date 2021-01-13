import { Component, OnInit } from '@angular/core';
import { DocumentaryService } from '../services/documentary.service';
import { TagService } from '../services/tag.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-documentaries',
  templateUrl: './documentaries.component.html',
  styleUrls: ['./documentaries.component.css']
})
export class DocumentariesComponent implements OnInit {

  // For the url at the top
  linkRoute: string;

  // Tag and documentary data from DB
  tagsList: any;
  documentariesList: any;
  categoryList: any;

  // Used for only displaying current categories
  currentTagId: string = "";
  currentTag: string = "";
  currentCategoryId: string = "";
  currentCategory: string = "";
  isTag: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private tagService: TagService,
    private docoService: DocumentaryService
  ) { 
    // params is the :id (unique value) from the link (eg 'aircrash' from /categories/aircrash). 
    this.route.params.subscribe(params => {
      this.listDocos();
      console.log(params);
    });
  }

  // Provide a list of documentaries
  ngOnInit(): void {
    this.currentTag = "";
    this.currentCategory = "";
    this.listDocos();
  }

  // Only list documentaries that match the tag, eg 'aircrash'.
  listDocos() {
    let url = window.location.href;
    this.linkRoute = url.substring(url.lastIndexOf("/")+1, url.length);
    this.documentariesList = this.docoService.readFromDB();

    this.currentTag = "";
    this.currentCategory = "";
    this.currentTagId = "";
    this.currentCategoryId = "";


    this.getCurrentTag();
    this.getCurrentCategory();
  }

  // Find the current tag of the page (eg, find if the user selected 'aircrash'). 
  async getCurrentTag() {
    this.tagsList = await this.tagService.readFromDB();
    this.tagsList.forEach(tag => {
      if(this.linkRoute.match(tag.link.toString())){
        this.currentTagId = tag.id;
        this.currentTag = tag.name;
      }
    });
    console.log("Tag Pipeline: " + this.currentTag);
  }

  // Find the current category of the page (eg, find if the user selected 'health'). 
  async getCurrentCategory() {
    this.categoryList = await this.categoryService.readFromDB();
    this.categoryList.forEach(category => {
      if(this.linkRoute.match(category.link.toString())){
        this.currentCategoryId = category.id;
        this.currentCategory = category.name;
      }
    });
    console.log("Category Pipeline: " + this.currentCategory);
  }
}
