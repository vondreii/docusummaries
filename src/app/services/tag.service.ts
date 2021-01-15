import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  
  tagsList: any;
  tagsByCategory: Array<string>;

  constructor(
    private db: AngularFirestore
  ) { }

  // Return all Tag objects from Firebase
  readFromDB() {
    return new Promise<any>((resolve)=> {
      this.db.collection('tag').valueChanges({ idField: 'id' }).subscribe(tags => resolve(tags));
    })
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
