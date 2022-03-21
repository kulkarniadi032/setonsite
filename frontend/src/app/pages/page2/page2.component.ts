import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css'],
})
export class Page2Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  page2Form = new FormGroup({
    type: new FormControl('', [Validators.required]),
    reatedCapacity: new FormControl('', [Validators.required]),
    reatedVoltageHV: new FormControl('', [Validators.required]),
    reatedVoltageLV: new FormControl('', [Validators.required]),
    reatedCurrentHV: new FormControl('', [Validators.required]),
    reatedCurrentLV: new FormControl('', [Validators.required]),
    reatedFrequency: new FormControl('', [Validators.required]),
    vectorGroup: new FormControl('', [Validators.required]),
    positiveTaps: new FormControl('', [Validators.required]),
    negativeTaps: new FormControl('', [Validators.required]),
    steps: new FormControl('', [Validators.required]),
  });
  page2FormData(data: any) {
    console.log(data.value);
    this.page2Form.reset();
  }
}
