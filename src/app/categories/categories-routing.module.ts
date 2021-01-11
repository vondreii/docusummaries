import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentariesComponent } from '../documentaries/documentaries.component';
import { CategoriesComponent } from './categories.component';

const routes: Routes = [
  { path: '', component: CategoriesComponent },
  { path: 'aircrash', component: DocumentariesComponent },
  { path: 'explosions-or-fire', component: DocumentariesComponent },
  { path: 'murders', component: DocumentariesComponent },
  { path: 'physical', component: DocumentariesComponent },
  { path: 'psychology', component: DocumentariesComponent },
  { path: 'shootings', component: DocumentariesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
