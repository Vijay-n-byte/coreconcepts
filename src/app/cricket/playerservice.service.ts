import { Injectable } from '@angular/core';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class PlayerserviceService {
  constructor() { }

 players:Player[]=[
  {id:1,name:"vijay",role:"bowler",experience:2},
  {id:2,name:"sijay",role:"batter",experience:7},
  {id:3,name:"dijay",role:"bowler",experience:6},
  {id:4,name:"hijay",role:"batter",experience:1},
  {id:5,name:"dhoni",role:"wicketkeeper",experience:1},
 ];

 getallplayers():Player[]{
  return this.players;
 }

 getsingleplayer(idd:number):Player{
  let q!:Player;
  this.players.every(n=>{
    if(n.id===idd){
      q=n;
      return false;
    }
    return true;
  });
  return q;
 }



 playeradd(p:Player):void{
  let y=0;
  this.players.forEach(n=>{
    if(n.name===p.name){
      alert("player already exists");
      y=1;
    }
  });
  if(y!==1){
    this.players.push(p);
    alert('added successfully');
  }
 }

 playerdelete(p:number):void{
  let y!:Player;
  this.players.forEach(n=>{
    if(n.id===p){
      y=n;
    }
  })
  let y1:number=this.players.indexOf(y);
  console.log(y1);
  this.players.splice(y1,1);
  console.log(y1);
 }

 playerupdate(p:Player):void{
  
  this.players.forEach(n=>{
    if(n.id===p.id){
      let r:number=this.players.indexOf(n);
      this.players.splice(r,1,p);
    }
  })
 }

}
