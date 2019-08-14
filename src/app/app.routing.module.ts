import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { Routes, RouterModule } from "@angular/router";
import { TestComponent } from "./test/test.component";
import { LerningComponent } from "./lerning/lerning.component";

export const appRouting: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'test/',
    component: TestComponent
  },
  {
    path: 'test/:id',
    component: TestComponent
  },
  {
    path: 'lerning/:id',
    component: LerningComponent
  },
  {
    path: 'lerning',
    component: LerningComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRouting)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
