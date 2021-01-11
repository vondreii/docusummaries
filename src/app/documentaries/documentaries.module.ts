import { NgModule, SecurityContext  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentariesRoutingModule } from './documentaries-routing.module';

// For Markdown functionality
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DocumentaryComponent } from './documentary/documentary.component'; 

@NgModule({
  declarations: [DocumentaryComponent],
  imports: [
    CommonModule,
    DocumentariesRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient, sanitize: SecurityContext.NONE })
  ]
})
export class DocumentariesModule { }
