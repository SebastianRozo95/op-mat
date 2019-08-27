import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  // valores sumatoria
  giVal1 : number = 0 ;
  giVal2 : number = 0 ;
  giResult : number = 0 ;
  //valores Mutltplicacion
  giVal1Multi : number;
  giVal2Multi : number; 
  giResultMulti: number;
  mSumar(){
    this.giResult = this.giVal1 + this.giVal2;
  }
  mMultiplicacion(){
    this.giResultMulti = this.giVal1Multi * this.giVal2Multi;
  }

  constructor() { }

  ngOnInit() {
  }

}