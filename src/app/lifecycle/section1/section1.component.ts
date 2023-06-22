import { Component, ViewChild ,AfterViewInit,AfterContentInit, ViewChildren,QueryList,ContentChild,ContentChildren} from '@angular/core';
import { Section2Component } from '../section2/section2.component';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component implements AfterViewInit,AfterContentInit{

  @ViewChild(Section2Component)
  firstcomponent!: Section2Component;

  @ViewChildren(Section2Component) allcomponents!:QueryList<Section2Component>; 

  @ContentChild(Section2Component) firstcontentcomponent!:Section2Component; 

  @ContentChild('temp') onecontentcomponent!:Section2Component; 

  @ContentChildren(Section2Component) allcontentcomponent!:QueryList<Section2Component>;

messages:string[]=[
    "hello","hi","welcome","bye"
  ]

  ngAfterViewInit(): void {
   // this.firstcomponent.g="changed value";
   this.allcomponents.toArray().forEach(ele => {
    ele.g="changed value";
    
   });
  }

  ngAfterContentInit(): void {
    // this.firstcontentcomponent.g="changed content";
    // this.allcontentcomponent.toArray().forEach(element => {
    //   element.g="changed all contents";
    // });

    this.onecontentcomponent.g="using template variable";
  }
  

  



}
