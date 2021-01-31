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
}
