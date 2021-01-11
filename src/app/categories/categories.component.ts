import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  // data taken directly from Dabatase
  dbCategoryList: any;
  dbTagsList: any;

  categoryList: Array<string> = [];

  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    this.dbCategoryList = this.db.collection('category').valueChanges({ idField: 'id' });
    this.dbTagsList = this.db.collection('tag').valueChanges({ idField: 'id' });
  }
}
