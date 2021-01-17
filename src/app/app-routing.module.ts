import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { DocumentariesComponent } from './documentaries/documentaries.component';
import { DocumentaryComponent } from './documentaries/documentary/documentary.component';
import { FirebaseComponent } from './firebase/firebase.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  // { path: '', component: CategoriesComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'firebase', component: FirebaseComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: CategoriesComponent },
  { path: ':id', component: DocumentariesComponent },
  { path: 'article/:article', component: DocumentaryComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
