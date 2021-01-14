import { BrowserModule } from '@angular/platform-browser';
import { NgModule, SecurityContext } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from "../environments/environment";

// Searchbar
import { HighlightDirective } from './search/highlight.directive';
import { FilterPipe } from './search/filter.pipe';
import { SearchComponent } from './search/search.component';

// Firebase
import { FirebaseComponent } from './firebase/firebase.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAnalyticsModule } from "@angular/fire/analytics";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";

// Markdown
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// Main pages
import { AboutComponent } from './about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { DocumentariesComponent } from './documentaries/documentaries.component';
import { HomeComponent } from './home/home.component';
import { DocumentaryComponent } from './documentaries/documentary/documentary.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    // Pages
    AppComponent,
    FirebaseComponent,
    AboutComponent,
    CategoriesComponent,
    DocumentariesComponent,
    HomeComponent,
    DocumentaryComponent,
    // Searchbar
    HighlightDirective,
    FilterPipe,
    SearchComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // Firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    // Markdown
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient, sanitize: SecurityContext.NONE })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
