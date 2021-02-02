import { Component, OnInit } from '@angular/core';
import { DocumentaryService } from '../../services/documentary.service';
import { TagService } from '../../services/tag.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { Category, Documentary, Tag } from 'src/app/models/models';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  // The current category we are viewing
  currentCategory: Category = {name: "", link: "", id: ""};
  currentTag: Tag = {name: "", link: "", id: "", category: ""};

  // For the url at the top
  tagLinkRoute: string;
  categoryLinkRoute: string;

  // Tag and documentary data from DB
  tagsList: any;
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
    this.tagLinkRoute = this.tagService.getUrlDirectory(url);
    this.categoryLinkRoute = this.categoryService.getUrlDirectory(url, true);

    // Get the current category/tag, a list of all documentaries
    // this.documentariesList = this.docoService.readFromDB();
    this.getCurrentTag().then(() => {
      this.getAllDocos();
    });
  }

  async getCurrentTag() {
    // Find the current tag of the page (eg, find if the user selected 'aircrash'). 
    this.tagService.getTagEntry("id-"+this.tagLinkRoute).then(tag => {
      this.currentTag = tag;
      this.currentTag.id = "id-"+this.tagLinkRoute;
      this.getCurrentCategory();
    });
  }

  async getCurrentCategory() {
    // Find the current category of the page (eg, find if the user selected 'health'). 
    this.categoryService.getCategoryEntry("id-"+this.categoryLinkRoute).then(category => {
      this.currentCategory = category;
      this.currentCategory.id = "id-"+this.tagLinkRoute;
    });
  }

  async getAllDocos() {
    // Gets a list of all Docos
    let allDocos = await this.docoService.readFromDB();
    // Returns a list of docos only for the specific tag
    this.documentariesList = this.docoService.getAllDocosForTag(allDocos, this.currentTag.id);
  }
}
