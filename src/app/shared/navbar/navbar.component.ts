import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  categoryList: any;

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.categoryList = this.categoryService.readFromDB();

    

  }

  

}
