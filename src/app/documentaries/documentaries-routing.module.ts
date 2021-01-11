import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { DocumentariesComponent } from './documentaries.component';
import { DocumentaryComponent } from './documentary/documentary.component';

const routes: Routes = [
  // For Markdown functionality for each page
  { path: '', component: DocumentariesComponent },
  { path: ':article', component: DocumentaryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentariesRoutingModule { }
