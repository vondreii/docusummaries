import { NgModule } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { DocumentariesComponent } from './documentaries/documentaries.component';
import { FirebaseComponent } from './firebase/firebase.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  //  { path: 'about', component: AboutComponent },
  { path: '', component: HomeComponent },
  { path: 'firebase', component: FirebaseComponent },
  { path: 'about', component: AboutComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'categories/:id', component: DocumentariesComponent },
  {
    path: 'categories/article',
    loadChildren: () => import('./documentaries/documentaries.module').then(m => m.DocumentariesModule)
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
