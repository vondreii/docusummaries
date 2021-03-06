import { BrowserModule } from '@angular/platform-browser';
import { NgModule, SecurityContext } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from "../environments/environment";

// Searchbar
// import { HighlightDirective } from './shared/search/highlight.directive';
// import { FilterPipe } from './shared/search/filter.pipe';
// import { SearchComponent } from './shared/search/search.component';

// Firebase
import { AngularFireModule } from "@angular/fire";
import { AngularFireAnalyticsModule } from "@angular/fire/analytics";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";

// Markdown
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// Main pages
import { AboutComponent } from './pages/about/about.component';
import { AdminComponent } from './admin/admin/admin.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { TagComponent } from './pages/tag/tag.component';
import { DocumentaryComponent } from './pages/documentary/documentary.component';
import { SharedModule } from './shared/shared.module';
import { AddComponent } from './admin/add/add.component';
import { EditComponent } from './admin/edit/edit.component';

@NgModule({
  declarations: [
    // Pages
    AppComponent,
    AboutComponent,
    HomeComponent,
    CategoryComponent,
    DocumentaryComponent,
    AdminComponent,
    ContactComponent,
    TagComponent,
    AddComponent,
    EditComponent,
    // Searchbar
    // HighlightDirective,
    // FilterPipe,
    // SearchComponent,
  ],
  imports: [
    SharedModule,
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
    MarkdownModule.forRoot({ loader: HttpClient, sanitize: SecurityContext.NONE }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
