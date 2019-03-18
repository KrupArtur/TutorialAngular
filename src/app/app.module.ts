import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { LerningComponent } from './lerning/lerning.component';
import { LerningTestWorkComponent } from './lerning-test-work/lerning-test-work.component';
import { CategoriesComponent } from './categories/categories.component';
import { HttpClientModule } from '@angular/common/http';



export const appRoutes: Routes = [   
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'test/', component: TestComponent},
  { path: 'test/:id', component: TestComponent},
  { path: 'lerning', component: LerningComponent}
];

@NgModule({
  imports: [   
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),  
    BrowserModule,
    HttpClientModule
  ],  
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TestComponent,
    LerningComponent,
    LerningTestWorkComponent,
    CategoriesComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}


