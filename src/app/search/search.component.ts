import { Component, OnInit } from '@angular/core';
import { TagService } from '../services/tag.service';
import { DocumentaryService } from '../services/documentary.service';
import { CategoryService } from '../services/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  // Declare search string elements
  searchText = '';
  documentariesList: any;
  tagsList: any;
  categoriesList: any; 
  searchString: Array<string> = new Array<string>();

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private docoService: DocumentaryService,
    private tagService: TagService
  ) { }

  // Build search string
  ngOnInit(): void {
    this.addCatagories();
    this.addTags();
    this.addDocos();
    console.log("Search string created." + this.searchString);
  }

  onSelect() {
    console.log("Something selected");
    this.searchText = '';
  }

  // Pull categories list from Firebase and add to the search string
  async addCatagories() {
    this.categoriesList = await this.categoryService.readFromDB();
    this.categoriesList.forEach(category => {
      this.searchString.push(category.name + " (Category) -@" + category.link);
    });
  }

  // Pull categories list from Firebase and add to the search string
  async addTags() {
    this.tagsList = await this.tagService.readFromDB();
    this.tagsList.forEach(tag => {
      this.searchString.push("#" + tag.name + " -@" + tag.link);
    });
  }

  // Pull docos list from Firebase and add to the search string
  async addDocos() {
    this.documentariesList = await this.docoService.readFromDB();
    this.documentariesList.forEach(doco => {
      this.searchString.push(
        doco.name + " - " + 
        doco.studio + " - " +
        doco.tags + " - " +
        doco.topic + " -@" +
        doco.link
      );
    });
  }
}
