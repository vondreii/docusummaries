import { Component, OnInit } from '@angular/core';
import { DocumentaryService } from '../services/documentary.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  searchText = '';
  documentariesList: any;
  searchString: Array<string> = new Array<string>();

  constructor(
    private docoService: DocumentaryService
  ) { }

  ngOnInit(): void {
    this.documentariesList = this.docoService.readFromDB();
    this.searchList();
  }

  async searchList() {
    this.documentariesList = await this.docoService.readFromDB();
    this.documentariesList.forEach(doco => {
      this.searchString.push(
        doco.name + " - " + 
        doco.studio + " - " +
        doco.tags + " - " +
        doco.topic + " - @" +
        doco.link
      );
    });
    console.log("Search string created.");
  }
}
