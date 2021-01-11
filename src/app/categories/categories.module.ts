import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { DocumentariesModule } from '../documentaries/documentaries.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    DocumentariesModule
  ]
})
export class CategoriesModule { }
