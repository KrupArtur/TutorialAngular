import { HomeComponent } from './home/home.component';
import { LerningOnDrivingTestComponent } from './lerning-on-driving-test/lerning-on-driving-test.component';
import { DrivingTestComponent } from './driving-test/driving-test.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'drivingTest/:id',
    component: DrivingTestComponent
  },
  {
    path: 'learningOnDrivingTest/:id',
    component: LerningOnDrivingTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
