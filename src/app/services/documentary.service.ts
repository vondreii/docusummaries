import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Category, Documentary, Tag } from '../models/models';
import { TagService } from './tag.service';
import { LocalCategories, LocalTags, LocalDocos } from '../models/localStorage';

@Injectable({
  providedIn: 'root'
})
export class DocumentaryService {

  constructor(
    private db: AngularFirestore,
    private tagService: TagService
  ) { }

  // Return all Documentary objects from Local Storage
  readFromLocalStorage() {
    return LocalDocos;
  }
  // Return all Documentary objects from Firebase
  readFromDB() {
    return new Promise<any>((resolve)=> {
      this.db.collection('documentary').valueChanges({ idField: 'id' }).subscribe(docos => resolve(docos));
    })
  }
  // Returns a single doco entry, based on the id
  getDocoEntry(id: string) {
    return new Promise<Documentary>((resolve)=> {
      this.db.collection('documentary').doc(id).valueChanges().subscribe((doco: Documentary) => resolve(doco));
    })
  }
  // Gets all Docos for a Category (Offline)
  getAllDocosForCategoryOffline(allDocos: any, currentCategory: Category) {
    let docosForCategory = Array<Documentary>();
    allDocos.forEach(doco => {
      if(doco.category==currentCategory.id) {
        if (!docosForCategory.some(e => e.link === doco.link)) {
          docosForCategory.push(doco);
        }
      }
    });
    return docosForCategory;
  }
  // Gets all Docos for a Category
  getAllDocosForCategory(allDocos: any, currentCategory: Category) {
    let docosForCategory = Array<Documentary>();
    allDocos.forEach(doco => {
      if(doco.category==currentCategory.id) {
        if (!docosForCategory.some(e => e.link === doco.link)) {
          docosForCategory.push(doco);
          docosForCategory[docosForCategory.length-1].categoryObj = currentCategory;
          docosForCategory[docosForCategory.length-1].tagObj = this.getAllTagsForDoco(doco);
        }
      }
    });
    return docosForCategory;
  }
  // For a given doco, get all the tag objects for it
  getAllTagsForDoco(doco: Documentary) {
    let tagsArray: Array<Tag> = new Array<Tag>();
    doco.tags.forEach(tagId => {
      this.tagService.getTagEntry(tagId).then(tagEntry =>{
        tagsArray.push(tagEntry)
      });
    });
    return tagsArray;
  }
  // Gets all Docos for a tag (offline)
  getAllDocosForTagOffline(allDocos: any, currentTag) {
    let docosForTag = [];
    allDocos.forEach(doco => {
      doco.tags.forEach(tag => {
        if(tag.includes(currentTag)) {
          if (!docosForTag.some(e => e.link === doco.link)) {
            docosForTag.push(doco);
          }
        }
      });
    });
    return docosForTag;
  }
  // Gets all Docos for a tag
  getAllDocosForTag(docoIds: Array<string>) {
    let docosForTag = [];
    for (let i = 0; i < docoIds.length; i++) {
      this.getDocoEntry(docoIds[i]).then(doco => {
        if (!docosForTag.some(e => e.link === doco.link)) {
          docosForTag.push(doco);
          docosForTag[docosForTag.length-1].tagObj = this.getAllTagsForDoco(doco);
        }
      })
    }
    return docosForTag;
  }
  // Adds a new doco entry to Firebase
  addToDB(category: string, name: string, desc: string, keywords: Array<string>, urlLink: string, linkToDoco: string, producer: string, studio: string, tags: string[]) {
    // Create the document ID
    let r = Math.random().toString(36).substring(7);
    let docID = r + "-" + urlLink.substring(urlLink.lastIndexOf("/")+1, urlLink.length);
    // Add data to Firebase
    this.db.collection('documentary').doc(docID).set({
      category: category,
      description: desc,
      keywords: keywords,
      link: urlLink,
      linkToDoco: linkToDoco,
      name: name,
      producer: producer,
      studio: studio,
      tags: tags
    })
    console.log("Documentary added successfully.");
    alert("Documentary added successfully");

    console.log(tags[0]);
    // Add documentary to the list of
    // let updateNested = this.db.collection('documentary').doc('Frank').update({
    //   age: 13,
    //   'favorites.color': 'Red'
    // });
  }
}
