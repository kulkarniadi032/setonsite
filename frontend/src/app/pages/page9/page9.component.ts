import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ThirdPageService } from 'src/app/services/third-page.service';

@Component({
  selector: 'app-page9',
  templateUrl: './page9.component.html',
  styleUrls: ['./page9.component.css'],
})
export class Page9Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  form9 = new FormGroup({
    V1: new FormControl('', [Validators.required]),
    I1: new FormControl('', [Validators.required]),
    P1: new FormControl('', [Validators.required]),
    V2: new FormControl('', [Validators.required]),
    I2: new FormControl('', [Validators.required]),
    P2: new FormControl('', [Validators.required]),
    V3: new FormControl('', [Validators.required]),
    I3: new FormControl('', [Validators.required]),
    P3: new FormControl('', [Validators.required]),
    CTR: new FormControl('', [Validators.required]),
    PTR: new FormControl('', [Validators.required]),
    V_AVG: new FormControl('', [Validators.required]),
    I_AVG: new FormControl('', [Validators.required]),
  });

  createPage9Data(data: any) {
    console.log(data.value);
  }

  V1: any;
  I1: any;
  P1: any;
  V2: any;
  I2: any;
  P2: any;
  V3: any;
  I3: any;
  P3: any;
  CTR: any;
  PTR: any;
  V_AVG: any;
  I_AVG: any;

  handleV1(data: any) {
    this.V1 = data;
    this.Vavg();
    this.Vapplied();
  }
  handleI1(data: any) {
    this.I1 = data;
    this.Iavg();
  }
  handleP1(data: any) {
    this.P1 = data;
    this.Psum();
  }

  handleV2(data: any) {
    this.V2 = data;
    this.Vavg();
    this.Vapplied();
  }
  handleI2(data: any) {
    this.I2 = data;
    this.Iavg();
    this.Inl();
  }
  handleP2(data: any) {
    this.P2 = data;
    this.Psum();
  }

  handleV3(data: any) {
    this.V3 = data;
    this.Vavg();
    this.Vapplied();
  }
  handleI3(data: any) {
    this.I3 = data;
    this.Iavg();
    this.Inl();
  }
  handleP3(data: any) {
    this.P3 = data;
    this.Psum();
  }

  handleCTR(data: any) {
    this.CTR = data;
    this.Iavg();
    this.Inl();
    this.NoLoad();
  }
  handlePTR(data: any) {
    this.PTR = data;
    this.Vavg();
    this.Vapplied();
    this.NoLoad();
  }

  VavgData: any;
  IavgData: any;
  PsumData: any;
  VappData: any;
  InlData: any;
  NoLoadData: any;

  Vavg() {
    this.VavgData = (this.V1 + this.V2 + this.V3) / 3;
  }
  Iavg() {
    this.IavgData = (this.I1 + this.I2 + this.I3) / 3;
  }
  Psum() {
    this.PsumData = this.P1 + this.P2 + this.P3;
  }

  Vapplied() {
    this.VappData = ((this.V1 + this.V2 + this.V3) / 3) * this.PTR;
  }
  Inl() {
    this.InlData = ((this.I1 + this.I2 + this.I3) / 3) * this.CTR;
  }
  NoLoad() {
    this.NoLoadData =
      ((this.P1 + this.P2 + this.P3) * this.CTR * this.PTR) / 1000;
  }

  isShowCalculationPart: boolean = false;
  handleCalculation(e: any) {
    console.log(e.target.checked);
    this.isShowCalculationPart = e.target.checked;
  }
}
