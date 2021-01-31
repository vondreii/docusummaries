import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Category } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  constructor(private db: AngularFirestore) { }

  // Return all Category objects from Firebase
  readFromDB() {
    return new Promise<any>((resolve)=> {
      this.db.collection('category').valueChanges({ idField: 'id' }).subscribe(categories => resolve(categories));
    })
  }
  // Returns a single category entry, based on the id
  getCategoryEntry(id: string) {
    return new Promise<Category>((resolve)=> {
      this.db.collection('category').doc(id).valueChanges().subscribe((category: Category) => resolve(category));
    })
  }
  // Gets the directory of the tag part of the URL
  getUrlDirectory(url: string, ofTag: boolean) {
    if(ofTag) {
      return url.substring(this.nthLastIndexOf(2, "/", url)+1, url.lastIndexOf("/"));
    }
    else {
      return url.substring(url.lastIndexOf("/")+1, url.length);
    }
  }
  nthLastIndexOf(nth: number, ch: string, str: string) {
    if (nth <= 0) return str.length;
    return this.nthLastIndexOf(--nth, ch, str.substring(0, str.lastIndexOf(ch)));
  }
}
