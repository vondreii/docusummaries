import { Component, OnInit } from '@angular/core';
import { DocumentaryService } from '../services/documentary.service';
import { FormControl, FormGroup } from "@Angular/forms";
import { Documentary } from '../models/models';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  newDoco: Documentary = new Documentary();

  constructor(private docoService: DocumentaryService) { }

  ngOnInit(): void {
  }
  
  onAdd() {
    this.docoService.addToDB();
  }
}
