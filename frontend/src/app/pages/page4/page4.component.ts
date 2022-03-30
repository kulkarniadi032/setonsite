import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css'],
})
export class Page4Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  form4 = new FormGroup({
    HVE15: new FormControl('', [Validators.required]),
    LVE15: new FormControl('', [Validators.required]),
    HVLVE15: new FormControl('', [Validators.required]),
    HVE60: new FormControl('', [Validators.required]),
    LVE60: new FormControl('', [Validators.required]),
    HVLV60: new FormControl('', [Validators.required]),
    HVE600: new FormControl('', [Validators.required]),
    LVE600: new FormControl('', [Validators.required]),
    HVLV600: new FormControl('', [Validators.required]),
  });
  createPage4Data(data: any) {
    console.log(data);
  }
  HVE15: any;
  HVE60: any;
  HVE600: any;
  LVE15: any;
  LVE60: any;
  LVE600: any;
  HVLV15: any;
  HVLV60: any;
  HVLV600: any;
  handleHVE15(data: any) {
    this.HVE15 = data;
    this.DIHV();
  }
  handleLVE15(data: any) {
    this.LVE15 = data;
    this.DILV();
  }
  handleHVLVE15(data: any) {
    this.HVLV15 = data;
    this.DIHVLV();
  }
  handleHVE60(data: any) {
    this.HVE60 = data;
    this.DIHV();
    this.PIHV();
  }
  handleLVE60(data: any) {
    this.LVE60 = data;
    this.DILV();
    this.PILV();
  }
  handleHVLV60(data: any) {
    this.HVLV60 = data;
    this.DIHVLV();
    this.PIHVLV();
  }
  handleHVE600(data: any) {
    this.HVE600 = data;
    this.PIHV();
  }
  handleLVE600(data: any) {
    this.LVE600 = data;
    this.PILV();
  }
  handleHVLV600(data: any) {
    this.HVLV600 = data;
    this.PIHVLV();
  }
  PIHVData: any;
  PILVData: any;
  PIHVLVData: any;
  DIHVData: any;
  DILVData: any;
  DIHVLVData: any;
  PIHV() {
    this.PIHVData = this.HVE600 / this.HVE60;
  }
  PILV() {
    this.PILVData = this.LVE600 / this.LVE60;
  }
  PIHVLV() {
    this.PIHVLVData = this.HVLV600 / this.HVLV60;
  }
  DIHV() {
    this.DIHVData = this.HVE60 / this.HVE15;
  }
  DILV() {
    this.DILVData = this.LVE60 / this.LVE15;
  }
  DIHVLV() {
    this.DIHVLVData = this.HVLV60 / this.HVLV15;
  }
}
