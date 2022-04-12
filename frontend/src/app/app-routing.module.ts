import { LoginComponent } from './pages/login/login.component';
import { Page12Component } from './pages/page12/page12.component';
import { Page11Component } from './pages/page11/page11.component';
import { Page10Component } from './pages/page10/page10.component';
import { Page8Component } from './pages/page8/page8.component';
import { Page6Component } from './pages/page6/page6.component';
import { Page3Component } from './pages/page3/page3.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './pages/page1/page1.component';

import { TestsComponent } from './pages/tests/tests.component';
import { Page2Component } from './pages/page2/page2.component';
import { Page4Component } from './pages/page4/page4.component';
import { Page5Component } from './pages/page5/page5.component';
import { Page9Component } from './pages/page9/page9.component';
import { Page7Component } from './pages/page7/page7.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: 'page3', component: Page3Component },
  { path: 'MEASUREMENT OF INSULATION RESISTANCE', component: Page4Component },
  { path: 'MEASUREMENT OF VOLTAGE RATIO', component: Page5Component },
  {
    path: 'MAGNETIC BALANCE AND MAGNETISING CURRENT TEST',
    component: Page6Component,
  },
  { path: 'MEASUREMENT OF WINDING RESISTANCE', component: Page7Component },
  { path: 'VECTOR GROUP TEST', component: Page8Component },
  {
    path: 'MEASUREMENT OF NO LOAD LOSS AND NO LOAD CURRENT',
    component: Page9Component,
  },
  {
    path: 'MEASUREMENT OF LOAD LOSS AND IMPEDANCE',
    component: Page10Component,
  },
  {
    path: 'SEPARATE SOURCE VOLTAGE WITHSTAND TEST',
    component: Page11Component,
  },
  { path: 'INDUCED OVER VOLTAGE TEST', component: Page12Component },
  { path: 'tests', component: TestsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
