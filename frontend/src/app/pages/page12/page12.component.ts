import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page12',
  templateUrl: './page12.component.html',
  styleUrls: ['./page12.component.css'],
})
export class Page12Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  isRemark: boolean = false;

  isShowRemark: any = '';
  isAddremarkpage12(data: any) {
    this.isShowRemark = data;
  }
  addRemarkOfPage12() {
    this.isRemark = true;
  }
  form12 = new FormGroup({
    remark: new FormControl('', [Validators.required]),
  });
  createPage12FromData(data: any) {
    console.log(data.value);
    this.form12.reset();
  }
}
