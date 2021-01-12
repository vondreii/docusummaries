import { Component, OnInit } from '@angular/core';
import { TagService } from '../services/tag.service';
import { DocumentaryService } from '../services/documentary.service';

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
  searchString: Array<string> = new Array<string>();

  constructor(
    private docoService: DocumentaryService,
    private tagService: TagService
  ) { }

  // Build search string
  ngOnInit(): void {
    this.addTags();
    this.addDocos();
    console.log("Search string created." + this.searchString);
  }

  // Pull categories list from Firebase and add to the search string
  async addTags() {
    this.tagsList = await this.tagService.readFromDB();
    this.tagsList.forEach(tag => {
      this.searchString.push(tag.name + " (Category) -@/categories/" + tag.link);
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
