import { Component, OnInit } from '@angular/core';
import { ThirdPageService } from 'src/app/services/third-page.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css'],
})
export class Page3Component implements OnInit {
  constructor(private page3: ThirdPageService) {}

  ngOnInit(): void {}

  isCheckTestArr: any = [];
  isCheckTest(e: any) {
    if (this.isCheckTestArr.length) {
      const exist = this.isCheckTestArr.find(
        (item: any) => item.srNo == e.srNo
      );
      if (exist) {
        console.log(exist);
        const bb = this.isCheckTestArr.filter(
          (item: any) => item.srNo != exist.srNo
        );
        this.isCheckTestArr = bb;
        // console.log(this.isCheckTestArr);
      } else {
        this.isCheckTestArr.push(e);
        // console.log(this.isCheckTestArr);
      }
    } else {
      this.isCheckTestArr.push(e);
      // console.log(this.isCheckTestArr);
    }
    this.isCheckTestArr.sort((a: any, b: any) => a.srNo - b.srNo);
    this.page3.dataFrompage3(this.isCheckTestArr);
  }
}
