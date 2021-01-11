import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  
  constructor(private db: AngularFirestore) { }

  // Return all Tag objects from Firebase
  readFromDB() {
    return new Promise<any>((resolve)=> {
      this.db.collection('tag').valueChanges({ idField: 'id' }).subscribe(tags => resolve(tags));
    })
  }
}
