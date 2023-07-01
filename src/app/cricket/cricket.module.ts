import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player/player.component';
import { TeamComponent } from './team/team.component';
import { TeamserviceService } from './teamservice.service';
import { PlayerserviceService } from './playerservice.service';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { NgForm } from '@angular/forms';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PlayerComponent,
    TeamComponent
  ],
  imports: [
    CommonModule,
    
  
    FormsModule,
    ReactiveFormsModule
    // AppRoutingModule
  ],
  providers:[TeamserviceService,PlayerserviceService],
})
export class CricketModule { }
