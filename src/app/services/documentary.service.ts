import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DocumentaryService {

  documentariesList: any;

  constructor(private db: AngularFirestore) { }

  readDocumentariesDB() {
    return new Promise<any>((resolve)=> {
      this.db.collection('documentary').valueChanges({ idField: 'id' }).subscribe(docos => resolve(docos));

      // this.categoryList = this.db.collection('category').valueChanges({ idField: 'id' });
      // this.documentariesList = this.db.collection('documentary').valueChanges({ idField: 'id' });
    })
  }
}
