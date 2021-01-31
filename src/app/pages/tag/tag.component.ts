import { Component, OnInit } from '@angular/core';
import { DocumentaryService } from '../../services/documentary.service';
import { TagService } from '../../services/tag.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { Category, Tag } from 'src/app/models/models';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  // The current category we are viewing
  currentCategory: Category = {name: "", link: "", id: ""};
  currentTag: Tag = {name: "", link: "", id: "", category: ""}

  // For the url at the top
  linkRoute: string;

  // Tag and documentary data from DB
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
      console.log(params);
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
    this.linkRoute = url.substring(url.lastIndexOf("/")+1, url.length);
    
    // Get the current category/tag, a list of all documentaries
    this.documentariesList = this.docoService.readFromDB();
    this.getCurrentTag();
  }

  async getCurrentTag() {
    // Find the current tag of the page (eg, find if the user selected 'aircrash'). 
    this.tagService.getTagEntry("id-"+this.linkRoute).then(tag => {
      this.currentTag = tag;
      this.currentTag.id = "id-"+this.linkRoute;
      console.log("Entered: "+this.currentTag.name);
      this.getCurrentCategory();
    });
  }

  async getCurrentCategory() {
    // Find the current category of the page (eg, find if the user selected 'health'). 
    this.categoryService.getCategoryEntry(this.currentTag.category).then(category => {
      this.currentCategory = category;
      this.currentCategory.id = "id-"+this.linkRoute;
    });
  }
}
