
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    TemplateModule,
    CommonModule,

  ],

  providers: [
    FormsModule,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
