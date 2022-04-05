import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-page9',
  templateUrl: './page9.component.html',
  styleUrls: ['./page9.component.css']
})
export class Page9Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  form9 = new FormGroup({
    v1: new FormControl('', [Validators.required]),
    i1: new FormControl('', [Validators.required]),
    p1: new FormControl('', [Validators.required]),
    v2: new FormControl('', [Validators.required]),
    i2: new FormControl('', [Validators.required]),
    p2: new FormControl('', [Validators.required]),
    v3: new FormControl('', [Validators.required]),
    i3: new FormControl('', [Validators.required]),
    p3: new FormControl('', [Validators.required]),
  });

  createPage9Data(data: any) {
    console.log(data.value);
  }

  v1: any;
  i1: any;
  p1: any;
  v2: any;
  i2: any;
  p2: any;
  v3: any;
  i3: any;
  p3: any;

handlev1(data: any) {
  this.v1 = data;
  this.vAvg();
}
handlei1(data: any) {
  this.i1 = data;
  this.iAvg();
}
handlep1(data: any) {
  this.p1 = data;
  this.pSum();
}

handlev2(data: any) {
  this.v2 = data;
  this.vAvg();
}
handlei2(data: any) {
  this.i2 = data;
  this.iAvg();
}
handlep2(data: any) {
  this.p2 = data;
  this.pSum();
}

handlev3(data: any) {
  this.v3 = data;
  this.vAvg();
}
handlei3(data: any) {
  this.i3 = data;
  this.iAvg();
}
handlep3(data: any) {
  this.p3 = data;
  this.pSum();
}


vAvgData: any;
iAvgData: any;
pSumData: any;

vAvg(){
  this.vAvgData = (this.v1+this.v2+this.v3)/3;
}
iAvg(){
  this.iAvgData = (this.i1+this.i2+this.i3)/3;
}
pSum(){
  this.pSumData = this.p1+this.p2+this.p3;
}
}
