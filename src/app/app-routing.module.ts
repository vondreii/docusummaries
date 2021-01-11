import { NgModule } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { FirebaseComponent } from './firebase/firebase.component';

const routes: Routes = [
  //  { path: 'about', component: AboutComponent },
  { path: '', component: CategoriesComponent },
  { path: 'firebase', component: FirebaseComponent },
  { path: 'about', component: AboutComponent },
  { path: 'categories', component: CategoriesComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
