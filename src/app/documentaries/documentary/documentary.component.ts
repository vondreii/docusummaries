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
  loaded = false;

  constructor(
    private route: ActivatedRoute,
    private docoService: DocumentaryService
  ) { }

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
