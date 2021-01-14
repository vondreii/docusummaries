import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ReactiveFormsModule } from "@Angular/forms";

@Injectable({
  providedIn: 'root'
})
export class DocumentaryService {

  constructor(private db: AngularFirestore) { }

  // Return all Documentary objects from Firebase
  readFromDB() {
    return new Promise<any>((resolve)=> {
      this.db.collection('documentary').valueChanges({ idField: 'id' }).subscribe(docos => resolve(docos));
    })
  }

  addToDB() {
    console.log("Adding doco");
    this.db.collection('test').add({
      category: "test category",
      description: "test desc",
      link: "test link",
      linkToDoco: "test linkToDoco",
      name: "blah",
      producer: "test linkToDoco",
      studio: "blah",
      tags: ["something", "somethingElse"],
      topic: "blah"
    })
  }
}
