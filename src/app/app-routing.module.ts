import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { DocumentariesComponent } from './documentaries/documentaries.component';
import { DocumentaryComponent } from './documentaries/documentary/documentary.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // { path: '', component: CategoriesComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: HomeComponent },
  { path: ':cat', component: CategoriesComponent },
  { path: ':cat/:tag', component: DocumentariesComponent },
  { path: ':cat/article/:article', component: DocumentaryComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
