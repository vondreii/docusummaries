import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  title = 'search';
  searchText = '';
  characters = [
    'Surviving Lockerbie Documentary (29th November 1998) - Surviving Lockerbie goes into detail about the moments leading up to the bombing and the aftermath - Stephen White - British Broadcasting Corporation (BBC), Forge Productions',
    'something',
    'Aquaman',
    'Asterix'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
