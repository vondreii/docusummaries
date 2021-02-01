import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

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
  // Gets all Docos for a tag
  getAllDocosForCategory(allDocos: any, currentCategory) {
    let docosForCategory = [];
    allDocos.forEach(doco => {
      if(doco.category==currentCategory) {
        if (!docosForCategory.some(e => e.link === doco.link)) {
          docosForCategory.push(doco);
        }
      }
    });
    return docosForCategory;
  }
  // Adds a new doco entry to Firebase
  addToDB(name: string, desc: string, linkToDoco: string, producer: string, studio: string, category: string, tags: string[]) {
    console.log("Adding doco");
    this.db.collection('test').add({
      category: category,
      description: desc,
      link: "test link",
      linkToDoco: linkToDoco,
      name: name,
      producer: producer,
      studio: studio,
      tags: tags,
      topic: "blah"
    })
  }
}
