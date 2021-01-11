import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-documentaries',
  templateUrl: './documentaries.component.html',
  styleUrls: ['./documentaries.component.css']
})
export class DocumentariesComponent implements OnInit {

  // for getting the url at the top
  href: string;
  hrefLink: string;

  categoryList: any;
  tagsList: any;
  documentariesList: any;

  currentCategory: any = "";

  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    this.href = window.location.href;
    this.hrefLink = this.href.substring(this.href.lastIndexOf("/")+1,this.href.length);

    this.categoryList = this.db.collection('category').valueChanges({ idField: 'id' });
    this.documentariesList = this.db.collection('documentary').valueChanges({ idField: 'id' });

    this.getTags();
  }

  toTitleCase(word: string) {
    if (!word) return word;
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
  }

  async getTags() {
    this.tagsList = await this.readTagsListDB();
    console.log(this.tagsList);
    this.tagsList.forEach(tag => {
      console.log(tag.link + ", " + this.hrefLink)
      if(this.hrefLink.match(tag.link.toString())){
        console.log("Yes");
        this.currentCategory = tag.id;
        console.log("Current category: "+this.currentCategory);
      }
    });
    console.log("Current category: "+this.currentCategory);
  }

  readTagsListDB() {
    return new Promise<any>((resolve)=> {
      this.db.collection('tag').valueChanges({ idField: 'id' }).subscribe(tags => resolve(tags));
    })
  }
}
