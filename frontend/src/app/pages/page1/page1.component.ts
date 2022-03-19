import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FirstPageService } from 'src/app/services/first-page.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
})
export class Page1Component implements OnInit {
  constructor(private page1: FirstPageService, private fb: FormBuilder) {
    this.witnessByForm = this.fb.group({
      witnessBy: this.fb.array([]),
    });
  }
  allPage1DataArr: any;
  ngOnInit(): void {
    this.getAllPage1Data();
  }
  //   name
  // orderNo
  // subStationName
  // certificateNo
  // transformerMake
  // serialNo
  // rating
  // referanceStandard
  // testingDate
  // remarks
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    orderNo: new FormControl('', [Validators.required]),
    subStationName: new FormControl('N/A', [Validators.required]),
    certificateNo: new FormControl('', [Validators.required]),
    transformerMake: new FormControl('', [Validators.required]),
    serialNo: new FormControl('', [Validators.required]),
    rating: new FormControl('', [Validators.required]),
    referanceStandard: new FormControl('', [Validators.required]),
    testingDate: new FormControl('', [Validators.required]),
    remarks: new FormControl('', [Validators.required]),
    testedByName: new FormControl('', [Validators.required]),
    testedByDesignation: new FormControl('', [Validators.required]),
    testedByComName: new FormControl('', [Validators.required]),
    testedByPlace: new FormControl('', [Validators.required]),
  });
  createPage1Data(data: any) {
    console.log({ ...data.value, ...this.witnessByForm.value });
    this.page1
      .createPage1DataService({ ...data.value, ...this.witnessByForm.value })
      .subscribe((returnPage1Data: any) => {
        console.log('created data');
        console.log(returnPage1Data.result);
        this.getAllPage1Data();
      });
  }
  deletePage1Data(id: any) {
    console.log(id);
    this.page1
      .deletePage1DataService(id)
      .subscribe((returnDeletePage1Data: any) => {
        console.log(returnDeletePage1Data.result);
        this.getAllPage1Data();
      });
  }
  getAllPage1Data() {
    this.page1
      .getAllPage1DataService()
      .subscribe((returnGetAllPage1Data: any) => {
        console.log(returnGetAllPage1Data.result);
        this.allPage1DataArr = returnGetAllPage1Data.result;
        console.log(this.allPage1DataArr);
      });
  }

  // witness by form starts here
  witnessByForm: FormGroup;
  witnessBy(): FormArray {
    return this.witnessByForm.get('witnessBy') as FormArray;
  }

  newWitnessBy(): FormGroup {
    return this.fb.group({
      witnessByName: new FormControl('', [Validators.required]),
      witnessByDesignation: new FormControl('', [Validators.required]),
      witnessByComName: new FormControl('', [Validators.required]),
      witnessByPlace: new FormControl('', [Validators.required]),
    });
  }

  addWitnessBy() {
    this.witnessBy().push(this.newWitnessBy());
    this.isWitnessBy = false;
  }
  removeWitnessBy(id: any) {
    this.witnessBy().removeAt(id);
  }
  isWitnessBy: boolean = true;
  finalWitnessBy: any;
  onSubmitWitnessBy() {
    console.log(this.witnessByForm.value);
  }
}
