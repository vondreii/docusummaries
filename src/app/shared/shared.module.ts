import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { HighlightDirective } from './search/highlight.directive';
import { FilterPipe } from './search/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ 
    NavbarComponent,
    SearchComponent,
    HighlightDirective,
    FilterPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    NavbarComponent,
    SearchComponent
  ]
})
export class SharedModule { }
