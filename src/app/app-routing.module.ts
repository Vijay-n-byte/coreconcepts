import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Section1Component } from './lifecycle/section1/section1.component';
import { HomeComponent } from './home/home.component';
import { Section3Component } from './lifecycle/section3/section3.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"lifecyclehookseg",component:Section3Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
