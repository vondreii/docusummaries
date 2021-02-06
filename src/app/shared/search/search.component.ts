import { Component, OnInit } from '@angular/core';
import { TagService } from '../../services/tag.service';
import { DocumentaryService } from '../../services/documentary.service';
import { CategoryService } from '../../services/category.service';

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

  darkMode: boolean;

  constructor(
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
      // Add docoName
      let docoEntry = doco.name + " - ";
      // Add studio to search entry if there is a value
      if (doco.studio != "") {
        docoEntry += doco.studio + " - ";
      }
      // WIP
      // Add producer to search entry if there is a value
      // if (doco.producer != "") {
      //   docoEntry += doco.producer + " - ";
      // }
      // Compulsory - will always be listed with tags and a link
      // doco.tags.forEach(tag => {
      //   tag.name
      // });
      docoEntry += doco.tags + " -@/" + doco.link;

      this.searchString.push(docoEntry);
    });
  }
}
