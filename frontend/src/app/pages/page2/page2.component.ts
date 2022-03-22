import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SecondPageService } from 'src/app/services/second-page.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css'],
})
export class Page2Component implements OnInit {
  constructor(private page2: SecondPageService) {}
  // type
  // ratedCapacity
  // ratedVoltageHV
  // ratedVoltageLV
  // ratedCurrentHV
  // ratedCurrentLV
  // ratedFrequency
  // vectorGroup
  // positiveTaps
  // negativeTaps
  // steps
  ngOnInit(): void {}
  page2Form = new FormGroup({
    type: new FormControl('', [Validators.required]),
    ratedCapacity: new FormControl('', [Validators.required]),
    ratedVoltageHV: new FormControl('', [Validators.required]),
    ratedVoltageLV: new FormControl('', [Validators.required]),
    ratedCurrentHV: new FormControl('', [Validators.required]),
    ratedCurrentLV: new FormControl('', [Validators.required]),
    ratedFrequency: new FormControl('', [Validators.required]),
    vectorGroup: new FormControl('', [Validators.required]),
    positiveTaps: new FormControl('', [Validators.required]),
    negativeTaps: new FormControl('', [Validators.required]),
    steps: new FormControl('', [Validators.required]),
  });
  page2CreatedFormArr: any = [];
  page2FormData(data: any) {
    this.page2
      .createPage2DataService(data.value)
      .subscribe(({ result }: any) => {
        console.log(result);
        this.page2CreatedFormArr.push(result);
        console.log(this.page2CreatedFormArr);
      });
    this.page2Form.reset();
  }
}
