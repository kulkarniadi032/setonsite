import { EleventhPageService } from './../../services/eleventh-page.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SecondPageService } from 'src/app/services/second-page.service';

@Component({
  selector: 'app-page11',
  templateUrl: './page11.component.html',
  styleUrls: ['./page11.component.css'],
})
export class Page11Component implements OnInit {
  page2DataLoadInPage11: any;
  constructor(
    private page2: SecondPageService,
    private page11: EleventhPageService
  ) {
    console.log('get data from page2');
    this.page2DataLoadInPage11 = this.page2?.page2Data;
    console.log(this.page2DataLoadInPage11);
  }

  ngOnInit(): void {}

  // reatedVoltageHV
  // testVoltHV
  // testTimeHV
  // freqHV
  // reatedVoltageLV
  // testVoltLV
  // testTimeLV
  // freqLV
  form11 = new FormGroup({
    reatedVoltageHV: new FormControl('', [Validators.required]),
    testVoltHV: new FormControl('', [Validators.required]),
    testTimeHV: new FormControl('', [Validators.required]),
    freqHV: new FormControl('', [Validators.required]),
    reatedVoltageLV: new FormControl('', [Validators.required]),
    testVoltLV: new FormControl('', [Validators.required]),
    testTimeLV: new FormControl('', [Validators.required]),
    freqLV: new FormControl('', [Validators.required]),
    BDVOFOilSampple: new FormControl('', [Validators.required]),
  });
  createPage11FormData(data: any) {
    console.log(data.value);
    this.page11.createpage11DataService(data.value);
  }
}
