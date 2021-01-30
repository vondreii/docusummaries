import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentaryService } from '../../services/documentary.service';
import { Documentary } from '../../models/models';

@Component({
  selector: 'app-documentary',
  templateUrl: './documentary.component.html',
  styleUrls: ['./documentary.component.css']
})
export class DocumentaryComponent implements OnInit {

  // declare doco variables
  post: string;
  articleName: string;
  documentariesList: any;
  currentDoco: Documentary = new Documentary();

  constructor(
    private route: ActivatedRoute,
    private docoService: DocumentaryService
  ) { 
    // params is the :id (unique value) from the link (eg 'Comet781' from /../article/Comet781). 
    this.route.params.subscribe(params => {
      this.articleName = params.article;
      this.getCurrentDoco();
    });
  }

  // Get the article's name using the route and find the associated md file in src/assets.
  ngOnInit(): void {
    this.articleName = this.route.snapshot.paramMap.get('article');
    this.post = './assets/articles/' +  this.articleName + '.md';
    this.getCurrentDoco();
  }

  // Find the rest of the info related to the current doco (eg, description), to display it.
  async getCurrentDoco() {
    this.documentariesList = await this.docoService.readFromDB();
    this.documentariesList.forEach(doco => {
      if(doco.link.toString().includes(this.articleName)){
        this.currentDoco = doco;
      }
    });
    console.log("Current Doco: " + this.currentDoco.name + ", " + this.currentDoco.studio);
  }
}
