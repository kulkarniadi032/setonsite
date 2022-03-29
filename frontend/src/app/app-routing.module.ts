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
  { path: '', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: 'page3', component: Page3Component },
  { path: 'page4', component: Page4Component },
  { path: 'page5', component: Page5Component },
  { path: 'page6', component: Page6Component },
  { path: 'page7', component: Page7Component },
  { path: 'page8', component: Page6Component },
  { path: 'page9', component: Page9Component },
  { path: 'page10', component: Page6Component },
  { path: 'page11', component: Page6Component },
  { path: 'page12', component: Page6Component },
  { path: 'tests', component: TestsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
