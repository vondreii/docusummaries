import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { TagComponent } from './pages/tag/tag.component';
import { DocumentaryComponent } from './pages/documentary/documentary.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: HomeComponent },
  { path: ':cat', component: CategoryComponent },
  { path: ':cat/:tag', component: TagComponent },
  { path: ':cat/article/:article', component: DocumentaryComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
