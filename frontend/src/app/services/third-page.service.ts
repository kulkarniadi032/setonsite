import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThirdPageService {
  constructor() {}
  testDataFrompage3: any;
  dataFrompage3(data: any) {
    this.testDataFrompage3 = data;
    console.log('service');
    console.log(this.testDataFrompage3);
  }
}
