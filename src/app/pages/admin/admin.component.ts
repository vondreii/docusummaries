import { Component, OnInit } from '@angular/core';
import { DocumentaryService } from '../../services/documentary.service';
import { CategoryService } from '../../services/category.service';
import { TagService } from '../../services/tag.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  categoryList: any;
  tagsByCategory: Array<string>;
  hideTags: boolean = true;
  
  // User inputs
  docoName: string;
  description: string;
  linkToDoco: string;
  producer: string;
  studio: string;
  category: string;
  tags: any;
  tagsList: Array<string>;
  topic: string;

  // Generated Saved Data
  link: string

  constructor(
    private tagService: TagService,
    private docoService: DocumentaryService,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.tagsByCategory = new Array<string>();
    this.categoryList = this.categoryService.readFromDB();
  }

  onAdd() {
    console.log("Added successfully --> " +
                "Name: " + this.docoName + ", " +
                "Description: " + this.description + ", " +
                "linkToDoco: " + this.linkToDoco + ", " +
                "producer: " + this.producer + ", " +
                "studio: " + this.studio + ", " +
                "category: " + this.category);
                
    console.log(this.tags);
    this.docoService.addToDB(this.docoName, this.description, this.linkToDoco, this.producer, this.studio, this.category, this.tags);
  }

  async onCategoryChange() {
    this.tagsByCategory = await this.tagService.readTagsByCategory(this.category);
    this.hideTags = false;
  }
}
