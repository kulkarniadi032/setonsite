import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TwelvethPageService } from 'src/app/services/twelveth-page.service';

@Component({
  selector: 'app-page12',
  templateUrl: './page12.component.html',
  styleUrls: ['./page12.component.css'],
})
export class Page12Component implements OnInit {
  constructor(private page12: TwelvethPageService) {}

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
    reatedVoltagepage12: new FormControl('', [Validators.required]),
    testedVoltagePage12: new FormControl('', [Validators.required]),
    testedTimePage12: new FormControl('', [Validators.required]),
    frequencePage12: new FormControl('', [Validators.required]),
  });
  createPage12FromData(data: any) {
    this.page12.createpage12DataService(data.value);
    this.form12.reset();
  }
}
