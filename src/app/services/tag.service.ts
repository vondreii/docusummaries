import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Tag } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  
  tagsList: any;
  tagsByCategory: Array<string>;

  tagId: string;
  tagName: string;
  categoryId: string;

  constructor(
    private db: AngularFirestore
  ) { }

  // Return all Tag objects from Firebase
  readFromDB() {
    return new Promise<any>((resolve)=> {
      this.db.collection('tag').valueChanges({ idField: 'id' }).subscribe(tags => resolve(tags));
    })
  }
  // Returns a single tag entry, based on the id
  getTagEntry(id: string) {
    return new Promise<Tag>((resolve)=> {
      this.db.collection('tag').doc(id).valueChanges().subscribe((tag: Tag) => resolve(tag));
    })
  }
  // Gets all tags under a category
  getTagsForCategory(tagsList: any, currentCategory: string) {
    let tagsInCategory = [];
    tagsList.forEach(tag => {
      if(tag.category==currentCategory) {
        if (!tagsInCategory.some(e => e.id === tag.id)) {
          tagsInCategory.push(tag);
        }
      }
    });
    return tagsInCategory;
  }
  // Gets the directory of the tag part of the URL
  getUrlDirectory(url: string) {
    return url.substring(url.lastIndexOf("/")+1, url.length);
  }
  // Return all Tag objects under a specific category
  async readTagsByCategory(category: string) {
    this.tagsByCategory = new Array<string>()
    this.tagsList = await this.readFromDB();
    this.tagsList.forEach(tag => {
      if(tag.category==category) {
        this.tagsByCategory.push(tag)
      }
    });
    return this.tagsByCategory;
  }
}
