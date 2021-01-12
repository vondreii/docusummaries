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

  post: string;
  articleName: string;
  documentariesList: any;
  currentDoco: Documentary = new Documentary();

  constructor(
    private route: ActivatedRoute,
    private docoService: DocumentaryService
  ) { 
    // The params is the :id or :article (unique value) after the route.
    // Eg, /category/article/Comet781 = Comet781 is the params. 
    this.route.params.subscribe(params => 
      {
        this.articleName = params.article;
        console.log(this.articleName);
        this.getCurrentDoco();
      }
    );
  }

  ngOnInit(): void {
    // md files
    this.articleName = this.route.snapshot.paramMap.get('article');
    this.post = './assets/articles/' +  this.articleName + '.md';
    this.getCurrentDoco();
  }

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
