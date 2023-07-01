import { Component,OnInit } from '@angular/core';
import { TeamserviceService } from '../teamservice.service';
import { Team } from '../team';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit{

  swi!:number;
  e!:Team[];
  sim!:number;

  constructor(private r:TeamserviceService){}
  ngOnInit(): void {
    this.e=this.r.getallteams();
    console.log(this.e);
  }
  addteam(){
    this.r.addteam();
  }

  deleteteam(n:number){
    this.r.deleteteam(n);
  }



  addbatsman(u:number){
    this.swi=u;
  }
  addbatsman1(j1:string,j2:number){
    let j3:number=Number(j1);
    console.log(typeof j3);
    this.r.addbatsmantoteam(j3,j2);
  }

}
