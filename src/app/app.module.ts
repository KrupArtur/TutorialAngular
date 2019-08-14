import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { LerningComponent } from './lerning/lerning.component';

import { HttpClientModule } from '@angular/common/http';
import { AnswerDirective } from './shared/answer.directive';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],

  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TestComponent,
    LerningComponent,
    AnswerDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}


