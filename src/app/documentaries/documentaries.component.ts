import { Component, OnInit } from '@angular/core';
import { DocumentaryService } from '../services/documentary.service';
import { TagService } from '../services/tag.service';

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

  // Used for only displaying current categories
  currentTagId: string = "";
  currentTag: string = "";

  constructor(
    private tagService: TagService,
    private docoService: DocumentaryService
  ) { }

  //  Gets the end of the url (eg, 'aircrash') and only prints documentaries related to that tag
  ngOnInit(): void {
    let url = window.location.href;
    this.linkRoute = url.substring(url.lastIndexOf("/")+1, url.length);
    this.getCurrentTag();
    this.documentariesList = this.docoService.readFromDB();
  }

  // Compares a list of all tags to the selected one
  async getCurrentTag() {
    this.tagsList = await this.tagService.readFromDB();
    this.tagsList.forEach(tag => {
      if(this.linkRoute.match(tag.link.toString())){
        this.currentTagId = tag.id;
        this.currentTag = tag.name;
      }
    });
    console.log("Tag selected: " + this.currentTag);
  }
}
