import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page7',
  templateUrl: './page7.component.html',
  styleUrls: ['./page7.component.css']
})
export class Page7Component implements OnInit {
  constructor() { }

  ngOnInit(): void {}
  form7 = new FormGroup({
    U1V1_1 : new FormControl('', [Validators.required]),
    V1W1_1 : new FormControl('', [Validators.required]),
    U1W1_1 : new FormControl('', [Validators.required]),
    U1V1_2 : new FormControl('', [Validators.required]),
    V1W1_2 : new FormControl('', [Validators.required]),
    U1W1_2 : new FormControl('', [Validators.required]),
    U1V1_3 : new FormControl('', [Validators.required]),
    V1W1_3 : new FormControl('', [Validators.required]),
    U1W1_3 : new FormControl('', [Validators.required]),
    U1V1_4 : new FormControl('', [Validators.required]),
    V1W1_4 : new FormControl('', [Validators.required]),
    U1W1_4 : new FormControl('', [Validators.required]),
    U1V1_5 : new FormControl('', [Validators.required]),
    V1W1_5 : new FormControl('', [Validators.required]),
    U1W1_5 : new FormControl('', [Validators.required]),
    U1V1_6 : new FormControl('', [Validators.required]),
    V1W1_6 : new FormControl('', [Validators.required]),
    U1W1_6 : new FormControl('', [Validators.required]),
    U1V1_7 : new FormControl('', [Validators.required]),
    V1W1_7 : new FormControl('', [Validators.required]),
    U1W1_7 : new FormControl('', [Validators.required]),
    U1V1_8 : new FormControl('', [Validators.required]),
    V1W1_8 : new FormControl('', [Validators.required]),
    U1W1_8 : new FormControl('', [Validators.required]),
    U1V1_9 : new FormControl('', [Validators.required]),
    V1W1_9 : new FormControl('', [Validators.required]),
    U1W1_9 : new FormControl('', [Validators.required]),
    U1V1_10: new FormControl('', [Validators.required]),
    V1W1_10: new FormControl('', [Validators.required]),
    U1W1_10: new FormControl('', [Validators.required]),
    U1V1_11: new FormControl('', [Validators.required]),
    V1W1_11: new FormControl('', [Validators.required]),
    U1W1_11: new FormControl('', [Validators.required]),
    U1V1_12: new FormControl('', [Validators.required]),
    V1W1_12: new FormControl('', [Validators.required]),
    U1W1_12: new FormControl('', [Validators.required]),
    U1V1_13: new FormControl('', [Validators.required]),
    V1W1_13: new FormControl('', [Validators.required]),
    U1W1_13: new FormControl('', [Validators.required]),
    U1V1_14: new FormControl('', [Validators.required]),
    V1W1_14: new FormControl('', [Validators.required]),
    U1W1_14: new FormControl('', [Validators.required]),
    U1V1_15: new FormControl('', [Validators.required]),
    V1W1_15: new FormControl('', [Validators.required]),
    U1W1_15: new FormControl('', [Validators.required]),
    U1V1_16: new FormControl('', [Validators.required]),
    V1W1_16: new FormControl('', [Validators.required]),
    U1W1_16: new FormControl('', [Validators.required]),
    U1V1_17: new FormControl('', [Validators.required]),
    V1W1_17: new FormControl('', [Validators.required]),
    U1W1_17: new FormControl('', [Validators.required]),
    
    U2V2: new FormControl('', [Validators.required]),
    V2W2: new FormControl('', [Validators.required]),
    U2W2: new FormControl('', [Validators.required]),
  });

  createPage7Data(data: any) {
    console.log(data);
  }
  // input data
  U1V1_1 : any;
  V1W1_1 : any;
  U1W1_1 : any;
  U1V1_2 : any;
  V1W1_2 : any;
  U1W1_2 : any;
  U1V1_3 : any;
  V1W1_3 : any;
  U1W1_3 : any;
  U1V1_4 : any;
  V1W1_4 : any;
  U1W1_4 : any;
  U1V1_5 : any;
  V1W1_5 : any;
  U1W1_5 : any;
  U1V1_6 : any;
  V1W1_6 : any;
  U1W1_6 : any;
  U1V1_7 : any;
  V1W1_7 : any;
  U1W1_7 : any;
  U1V1_8 : any;
  V1W1_8 : any;
  U1W1_8 : any;
  U1V1_9 : any;
  V1W1_9 : any;
  U1W1_9 : any;
  U1V1_10: any;
  V1W1_10: any;
  U1W1_10: any;
  U1V1_11: any;
  V1W1_11: any;
  U1W1_11: any;
  U1V1_12: any;
  V1W1_12: any;
  U1W1_12: any;
  U1V1_13: any;
  V1W1_13: any;
  U1W1_13: any;
  U1V1_14: any;
  V1W1_14: any;
  U1W1_14: any;
  U1V1_15: any;
  V1W1_15: any;
  U1W1_15: any;
  U1V1_16: any;
  V1W1_16: any;
  U1W1_16: any;
  U1V1_17: any;
  V1W1_17: any;
  U1W1_17: any;

  U2V2:any;
  V2W2:any;
  U2W2:any;

  handleU1V1_1(data: any) {
    this.U1V1_1 = data;
    this.Ravg1();
  }
  handleV1W1_1(data: any) {
    this.V1W1_1 = data;
    this.Ravg1();
  }
  handleU1W1_1(data: any) {
    this.U1W1_1 = data;
    this.Ravg1();
  }
  handleU1V1_2(data: any) {
    this.U1V1_2 = data;
    this.Ravg2();
  }
  handleV1W1_2(data: any) {
    this.V1W1_2 = data;
    this.Ravg2();
  }
  handleU1W1_2(data: any) {
    this.U1W1_2 = data;
    this.Ravg2();
  }
  handleU1V1_3(data: any) {
    this.U1V1_3 = data;
    this.Ravg3();
  }
  handleV1W1_3(data: any) {
    this.V1W1_3 = data;
    this.Ravg3();
  }
  handleU1W1_3(data: any) {
    this.U1W1_3 = data;
    this.Ravg3();
  }
  handleU1V1_4(data: any) {
    this.U1V1_4 = data;
    this.Ravg4();
  }
  handleV1W1_4(data: any) {
    this.V1W1_4 = data;
    this.Ravg4();
  }
  handleU1W1_4(data: any) {
    this.U1W1_4 = data;
    this.Ravg4();
  }
  handleU1V1_5(data: any) {
    this.U1V1_5 = data;
    this.Ravg5();
  }
  handleV1W1_5(data: any) {
    this.V1W1_5 = data;
    this.Ravg5();
  }
  handleU1W1_5(data: any) {
    this.U1W1_5 = data;
    this.Ravg5();
  }
  handleU1V1_6(data: any) {
    this.U1V1_6 = data;
    this.Ravg6();
  }
  handleV1W1_6(data: any) {
    this.V1W1_6 = data;
    this.Ravg6();
  }
  handleU1W1_6(data: any) {
    this.U1W1_6 = data;
    this.Ravg6();
  }
  handleU1V1_7(data: any) {
    this.U1V1_7 = data;
    this.Ravg7();
  }
  handleV1W1_7(data: any) {
    this.V1W1_7 = data;
    this.Ravg7();
  }
  handleU1W1_7(data: any) {
    this.U1W1_7 = data;
    this.Ravg7();
  }
  handleU1V1_8(data: any) {
    this.U1V1_8 = data;
    this.Ravg8();
  }
  handleV1W1_8(data: any) {
    this.V1W1_8 = data;
    this.Ravg8();
  }
  handleU1W1_8(data: any) {
    this.U1W1_8 = data;
    this.Ravg8();
  }
  handleU1V1_9(data: any) {
    this.U1V1_9 = data;
    this.Ravg9();
  }
  handleV1W1_9(data: any) {
    this.V1W1_9 = data;
    this.Ravg9();
  }
  handleU1W1_9(data: any) {
    this.U1W1_9 = data;
    this.Ravg9();
  }
  handleU1V1_10(data: any) {
    this.U1V1_10 = data;
    this.Ravg10();
  }
  handleV1W1_10(data: any) {
    this.V1W1_10 = data;
    this.Ravg10();
  }
  handleU1W1_10(data: any) {
    this.U1W1_10 = data;
    this.Ravg10();
  }
  handleU1V1_11(data: any) {
    this.U1V1_11 = data;
    this.Ravg11();
  }
  handleV1W1_11(data: any) {
    this.V1W1_11 = data;
    this.Ravg11();
  }
  handleU1W1_11(data: any) {
    this.U1W1_11 = data;
    this.Ravg11();
  }
  handleU1V1_12(data: any) {
    this.U1V1_12 = data;
    this.Ravg12();
  }
  handleV1W1_12(data: any) {
    this.V1W1_12 = data;
    this.Ravg12();
  }
  handleU1W1_12(data: any) {
    this.U1W1_12 = data;
    this.Ravg12();
  }
  handleU1V1_13(data: any) {
    this.U1V1_13 = data;
    this.Ravg13();
  }
  handleV1W1_13(data: any) {
    this.V1W1_13 = data;
    this.Ravg13();
  }
  handleU1W1_13(data: any) {
    this.U1W1_13 = data;
    this.Ravg13();
  }
  handleU1V1_14(data: any) {
    this.U1V1_14 = data;
    this.Ravg14();
  }
  handleV1W1_14(data: any) {
    this.V1W1_14 = data;
    this.Ravg14();
  }
  handleU1W1_14(data: any) {
    this.U1W1_14 = data;
    this.Ravg14();
  }
  handleU1V1_15(data: any) {
    this.U1V1_15 = data;
    this.Ravg15();
  }
  handleV1W1_15(data: any) {
    this.V1W1_15 = data;
    this.Ravg15();
  }
  handleU1W1_15(data: any) {
    this.U1W1_15 = data;
    this.Ravg15();
  }
  handleU1V1_16(data: any) {
    this.U1V1_16 = data;
    this.Ravg16();
  }
  handleV1W1_16(data: any) {
    this.V1W1_16 = data;
    this.Ravg16();
  }
  handleU1W1_16(data: any) {
    this.U1W1_16 = data;
    this.Ravg16();
  }
  handleU1V1_17(data: any) {
    this.U1V1_17 = data;
    this.Ravg17();
  }
  handleV1W1_17(data: any) {
    this.V1W1_17 = data;
    this.Ravg17();
  }
  handleU1W1_17(data: any) {
    this.U1W1_17 = data;
    this.Ravg17();
  }

  handleU2V2(data:any){
    this.U2V2 = data;
    this.RavgSec();
  }
  handleV2W2(data:any){
    this.V2W2 = data;
    this.RavgSec();
  }
  handleU2W2(data:any){
    this.U2W2 = data;
    this.RavgSec();
  }
  
  // readonly data
  Ravg1Data:any;
  Ravg2Data:any;
  Ravg3Data:any;
  Ravg4Data:any;
  Ravg5Data:any;
  Ravg6Data:any;
  Ravg7Data:any;
  Ravg8Data:any;
  Ravg9Data:any;
  Ravg10Data:any;
  Ravg11Data:any;
  Ravg12Data:any;
  Ravg13Data:any;
  Ravg14Data:any;
  Ravg15Data:any;
  Ravg16Data:any;
  Ravg17Data:any;

  RavgSecData:any;
  
  Ravg1(){
    this.Ravg1Data = (this.U1V1_1 + this.V1W1_1 + this.U1W1_1) /3
  }
  Ravg2(){
    this.Ravg2Data = (this.U1V1_2 + this.V1W1_2 + this.U1W1_2) /3
  }
  Ravg3(){
    this.Ravg3Data = (this.U1V1_3 + this.V1W1_3 + this.U1W1_3) /3
  }
  Ravg4(){
    this.Ravg4Data = (this.U1V1_4 + this.V1W1_4 + this.U1W1_4) /3
  }
  Ravg5(){
    this.Ravg5Data = (this.U1V1_5 + this.V1W1_5 + this.U1W1_5) /3
  }
  Ravg6(){
    this.Ravg6Data = (this.U1V1_6 + this.V1W1_6 + this.U1W1_6) /3
  }
  Ravg7(){
    this.Ravg7Data = (this.U1V1_7 + this.V1W1_7 + this.U1W1_7) /3
  }
  Ravg8(){
    this.Ravg8Data = (this.U1V1_8 + this.V1W1_8 + this.U1W1_8) /3
  }
  Ravg9(){
    this.Ravg9Data = (this.U1V1_9 + this.V1W1_9 + this.U1W1_9) /3
  }
  Ravg10(){
    this.Ravg10Data = (this.U1V1_10 + this.V1W1_10 + this.U1W1_10) /3
  }
  Ravg11(){
    this.Ravg11Data = (this.U1V1_11 + this.V1W1_11 + this.U1W1_11) /3
  }
  Ravg12(){
    this.Ravg12Data = (this.U1V1_12 + this.V1W1_12 + this.U1W1_12) /3
  }
  Ravg13(){
    this.Ravg13Data = (this.U1V1_13 + this.V1W1_13 + this.U1W1_13) /3
  }
  Ravg14(){
    this.Ravg14Data = (this.U1V1_14 + this.V1W1_14 + this.U1W1_14) /3
  }
  Ravg15(){
    this.Ravg15Data = (this.U1V1_15 + this.V1W1_15 + this.U1W1_15) /3
  }
  Ravg16(){
    this.Ravg16Data = (this.U1V1_16 + this.V1W1_16 + this.U1W1_16) /3
  }
  Ravg17(){
    this.Ravg17Data = (this.U1V1_17 + this.V1W1_17 + this.U1W1_17) /3
  }

  RavgSec(){
    this.RavgSecData = (this.U2V2 + this.V2W2 + this.U2W2) /3
  }
  
}
