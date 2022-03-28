import { Component, OnInit } from '@angular/core';
import { ThirdPageService } from 'src/app/services/third-page.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css'],
})
export class TestsComponent implements OnInit {
  constructor(private page3: ThirdPageService) {
    console.log('this is test compo');

    console.log(this.page3.testDataFrompage3);
    this.selectedTestCasesData = this.page3.testDataFrompage3;
  }

  ngOnInit(): void {}
  selectedTestCasesData: any;
}
