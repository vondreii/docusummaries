import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentaryService } from '../../services/documentary.service';
import { Category, Documentary, Tag } from '../../models/models';
import { TagService } from 'src/app/services/tag.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-documentary',
  templateUrl: './documentary.component.html',
  styleUrls: ['./documentary.component.css']
})
export class DocumentaryComponent implements OnInit {

  // The current category/tag the doco is in
  currentCategory: Category = {name: "", link: "", id: ""};

  // declare doco variables
  post: string;
  relatedTags: Array<Tag> = [];
  articleName: string;
  documentariesList: any;
  currentDoco: Documentary = new Documentary();

  constructor(
    private route: ActivatedRoute,
    private docoService: DocumentaryService,
    private categoryService: CategoryService,
    private tagService: TagService,
  ) { 
    // params is the :id (unique value) from the link (eg 'Comet781' from /../article/Comet781). 
    this.route.params.subscribe(params => {
      this.articleName = params.article;
      this.getCurrentDoco().then(() => {
        this.getCurrentCategory();
      });
    });
  }

  // Get the article's name using the route and find the associated md file in src/assets.
  ngOnInit(): void {
    this.articleName = this.route.snapshot.paramMap.get('article');
    this.post = './assets/articles/' +  this.articleName + '.md';
    this.getCurrentDoco().then(() => {
      this.getCurrentCategory();
      this.getRelatedTags();
    });
  }

  async getCurrentDoco() {
    // Find the rest of the info related to the current doco (eg, description), to display it.
    this.documentariesList = await this.docoService.readFromDB();
    this.documentariesList.forEach(doco => {
      if(doco.link.toString().includes(this.articleName)){
        this.currentDoco = doco;
      }
    });
    console.log("Current Doco: " + this.currentDoco.name + ", " + this.currentDoco.category);
  }

  async getRelatedTags() {
    // Find the current tag of the page (eg, find if the user selected 'aircrash'). 
    let tagsList = await this.tagService.readFromDB();
    tagsList.forEach(tag => {
      if(this.currentDoco.tags.includes(tag.id)){
        this.relatedTags.push(tag);
      }
    });
  }

  async getCurrentCategory() {
    // Finds the category that the doco is listed under.
    this.currentCategory = await this.categoryService.getCategoryEntry(this.currentDoco.category);
    console.log(this.currentCategory.name);
  }
}
