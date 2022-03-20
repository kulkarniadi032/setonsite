import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isCheckTestArr: any = [];
  isCheckTest(e: any) {
    const isCheckCurrentValue = e.target.value;
    if (e.target.checked) {
      this.isCheckTestArr.push(e.target.value);
    } else {
      const isCheckUpdatedArr = this.isCheckTestArr.filter(
        (item: any) => isCheckCurrentValue != item
      );
      this.isCheckTestArr = isCheckUpdatedArr;
    }
    console.log(this.isCheckTestArr);
  }

}
