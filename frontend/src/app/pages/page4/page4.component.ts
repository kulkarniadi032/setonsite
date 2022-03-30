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
  handleHVE15(data: any) {
    console.log(data);
    this.HVE15 = data;
    this.PI15();
  }
  handleLVE15(data: any) {
    console.log(data);
  }
  handleHVLVE15(data: any) {
    console.log(data);
  }
  handleHVE60(data: any) {
    console.log(data);
    this.HVE60 = data;
    this.PI15();
  }
  handleLVE60(data: any) {
    console.log(data);
  }
  handleHVLV60(data: any) {
    console.log(data);
  }
  PI15Data: any;
  PI15() {
    this.PI15Data = this.HVE15 / this.HVE60;
  }
}
