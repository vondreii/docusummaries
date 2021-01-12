import { Component, OnInit } from '@angular/core';
import { DocumentaryService } from '../services/documentary.service';
import { TagService } from '../services/tag.service';
import { ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute,
    private tagService: TagService,
    private docoService: DocumentaryService
  ) { 
    // params is the :id (unique value) from the link (eg 'aircrash' from /categories/aircrash). 
    this.route.params.subscribe(params => {
      this.listDocos();
    });
  }

  // Provide a list of documentaries
  ngOnInit(): void {
    this.listDocos();
  }

  // Only list documentaries that match the tag, eg 'aircrash'.
  listDocos() {
    let url = window.location.href;
    this.linkRoute = url.substring(url.lastIndexOf("/")+1, url.length);
    this.getCurrentTag();
    this.documentariesList = this.docoService.readFromDB();
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
    console.log("Tag selected: " + this.currentTag);
  }
}
