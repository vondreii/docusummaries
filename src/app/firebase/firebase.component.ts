import { Component, OnInit } from '@angular/core';
import { TagService } from '../services/tag.service';
import { CategoryService } from '../services/category.service';
import { DocumentaryService } from '../services/documentary.service';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {

  categoryList: any;
  tagsList: any;
  documentariesList: any;

  constructor(
    private tagService: TagService,
    private categoryService: CategoryService,
    private docoService: DocumentaryService
  ) { }

  ngOnInit(): void {
    this.categoryList = this.categoryService.readFromDB();
    this.tagsList = this.tagService.readFromDB();
    this.documentariesList = this.docoService.readFromDB();
  }
}
