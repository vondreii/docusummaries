import { Component, OnInit } from '@angular/core';
import { DocumentaryService } from '../services/documentary.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  title = 'search';
  searchText = '';
  documentariesList: any;
  searchString: Array<string> = new Array<string>();
  // characters = [
  //   'Surviving Lockerbie Documentary (29th November 1998) - Surviving Lockerbie goes into detail about the moments leading up to the bombing and the aftermath - Stephen White - British Broadcasting Corporation (BBC), Forge Productions',
  //   'something',
  //   'Aquaman',
  //   'Asterix'
  // ]

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
        doco.producer + " - " +  
        doco.studio + " - " +
        doco.tags + " - " +
        doco.topic + " - @" +
        doco.link
      );
    });
    console.log(this.searchString);
  }

}
