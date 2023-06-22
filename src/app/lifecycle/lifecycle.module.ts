import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { AppRoutingModule } from '../app-routing.module';
import { Section3Component } from './section3/section3.component';



@NgModule({
  declarations: [
    Section1Component,
    Section2Component,
    Section3Component
  ],
  imports: [
    CommonModule,
    AppRoutingModule
    
  ],
 
})
export class LifecycleModule { }
