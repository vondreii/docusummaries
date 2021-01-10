import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {

  categoryList: any;
  tagsList: any;
  documentariesList: any;

  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    this.categoryList = this.db.collection('category').valueChanges({ idField: 'id' });
    this.tagsList = this.db.collection('tag').valueChanges({ idField: 'id' });
    this.documentariesList = this.db.collection('documentary').valueChanges({ idField: 'id' });
  }
}
