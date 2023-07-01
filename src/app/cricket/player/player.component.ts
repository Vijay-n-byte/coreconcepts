import { Component ,OnInit} from '@angular/core';
import { PlayerserviceService } from '../playerservice.service';
import { Player } from '../player';
import { NgForm ,FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit{

  updatefo!:FormGroup;
  e!:Player[];
  e1!:Player;
  play!:Player;
  openupdateform:boolean=false;
  constructor(private r:PlayerserviceService){}

  ngOnInit(): void {
    this.e=this.r.getallplayers();
  }

  addplayer(p:NgForm){
    
    this.e1=p.value;
    console.log(this.e1);
     this.r.playeradd(this.e1);
  }

  deleteplayer(p:number){
    console.log(p);
    this.r.playerdelete(p);
  }

  openupdate(p:Player){
    console.log(p);
    this.openupdateform=true;
    this.updatefo=new FormGroup({
      id:new FormControl(p.id),
      name:new FormControl(p.name),
      role:new FormControl(p.role),
      experience:new FormControl(p.experience)
    });
  }

  updateplayer(p:FormGroup){
    console.log(p.value);
    let g:Player=p.value;
   this.r.playerupdate(g);
   this.openupdateform=false;
  }
}
