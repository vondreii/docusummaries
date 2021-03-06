import { Component, OnInit } from '@angular/core';
import { DocumentaryService } from '../../services/documentary.service';
import { CategoryService } from '../../services/category.service';
import { TagService } from '../../services/tag.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  categoryList: any;
  tagsByCategory: Array<string>;
  keywordString: string;

  // User inputs
  docoName: string;
  description: string;
  keyword: string;
  keywords: Array<string> = [];
  urlLink: string;
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
    this.getCategories();
  }

  onAdd() {
    console.log("Adding: " + 
      this.category + ", " +
      this.docoName + ", " +
      this.description + ", " +
      this.keywords + ", " + 
      this.urlLink + ", " +
      this.linkToDoco + ", " +
      this.producer + ", " +
      this.studio + ", " +
      this.tags);
      
    this.docoService.addToDB(
      this.category, 
      this.docoName, 
      this.description, 
      this.keywords,
      this.urlLink,
      this.linkToDoco, 
      this.producer,
      this.studio, 
      this.tags);
  }

  async getCategories() {
    this.categoryList = await this.categoryService.readFromDB();
  }

  async onCategoryChange() {
    // Pre-fill the options of what tags to select from
    this.tagsByCategory = await this.tagService.readTagsByCategory(this.category);

    console.log(this.category); 
    
    // Pre-fill the link to have the first part of the URL

    let categoryName = this.category.substring(this.category.indexOf("-")+1, this.category.length)
    this.urlLink = categoryName + "/article/";
  }

  addKeyword() {
    if(this.keyword) {
      if(!this.keywords.includes(this.keyword)) {
        this.keywords.push(this.keyword);
        document.getElementById("keywordString").innerText = "Current keywords: " + this.keywords;
      }
    }
    this.keyword = "";
    console.log(this.keywords);
  }
}
