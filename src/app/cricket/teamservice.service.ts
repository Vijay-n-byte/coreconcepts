import { Injectable } from '@angular/core';
import { Team } from './team';
import { Player } from './player';
import { PlayerserviceService } from './playerservice.service';
@Injectable({
  providedIn: 'root'
})
export class TeamserviceService {


  constructor(private plq:PlayerserviceService) { }

  teams:Team[]=[
    { teamno:1,
      batsman:[ {id:2,name:"sijay",role:"batter",experience:7}, {id:4,name:"hijay",role:"batter",experience:1},],
      bowler:[ {id:1,name:"vijay",role:"bowler",experience:2}],
      wicketkeeper: [{id:5,name:"dhoni",role:"wicketkeeper",experience:1}]
    },
  ];

  getallteams():Team[]{
    return this.teams;
  }

  addteam():void{
    let k:number=this.teams.length;
    let k1:Team={
      teamno:k+1,
      batsman:[],
      bowler:[],
      wicketkeeper:[]   
    };
    this.teams.push(k1);
    console.log(this.teams);
  }
  deleteteam(n1:number):void{
    let r!:Team;
    this.teams.every(n=>{
      if(n.teamno===n1){
        r=n;
        return false;
      }
      return true;
    });
    let y:number=this.teams.indexOf(r);
    this.teams.splice(y,1);
  }


  addbatsmantoteam(playerno:number,teamno:number):void{
    let y!:Team;
    console.log(teamno);
    console.log(playerno);
    this.teams.filter(n=>{
      if(n.teamno===teamno){
        y=n;
      }
    });
    console.log(y);
    if(y.batsman?.length===2){
      alert("only 2 bowlers allowed!")
    }
    else{
      console.log("llll");
      let y5:number=0;
      y.batsman?.every(n4=>{
        if(n4.id===playerno){
          y5=1;
          alert("player already in the team");
          return false;
        }
        return true;
      });

      let inde:number=this.teams.indexOf(y);
      if(y5===0){
        console.log("hello");
        let nq:Player=this.plq.getsingleplayer(playerno);
        this.teams[inde].batsman?.push(nq);
        console.log(y);
        console.log(nq);
      }
    }


  }


  addbowlertoteam():void{

  }


  deleteplayertoteam():void{

  }


  updateplayertoteam():void{
    
  }


  
}
