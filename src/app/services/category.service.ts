import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

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
}
