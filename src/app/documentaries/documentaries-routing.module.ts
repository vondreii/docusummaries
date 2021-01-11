import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { DocumentariesComponent } from './documentaries.component';

const routes: Routes = [
  { path: '', component: DocumentariesComponent },
  { path: 'doco1', component: HomeComponent },
  { path: 'doco2', component: HomeComponent },
  { path: 'doco3', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentariesRoutingModule { }
