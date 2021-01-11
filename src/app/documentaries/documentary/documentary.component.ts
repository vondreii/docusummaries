import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-documentary',
  templateUrl: './documentary.component.html',
  styleUrls: ['./documentary.component.css']
})
export class DocumentaryComponent implements OnInit {

  post: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let articleName = this.route.snapshot.paramMap.get('article');
    this.post = './assets/articles/' +  articleName + '.md';
  }

}
