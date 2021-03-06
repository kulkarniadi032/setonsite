import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './pages/page1/page1.component';
import { HttpClientModule } from '@angular/common/http';
import { Page2Component } from './pages/page2/page2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './mat-module.module';
import { Page3Component } from './pages/page3/page3.component';
import { Page4Component } from './pages/page4/page4.component';
import { Page5Component } from './pages/page5/page5.component';
import { TestsComponent } from './pages/tests/tests.component';
import { Page6Component } from './pages/page6/page6.component';
import { Page9Component } from './pages/page9/page9.component';
import { ViewPdfComponent } from './pages/view-pdf/view-pdf.component';
import { Page7Component } from './pages/page7/page7.component';
import { Page8Component } from './pages/page8/page8.component';
import { Page12Component } from './pages/page12/page12.component';
import { Page11Component } from './pages/page11/page11.component';
import { Page10Component } from './pages/page10/page10.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [AppComponent, Page1Component, Page2Component, Page3Component, Page4Component, Page5Component, TestsComponent, Page6Component, Page9Component, ViewPdfComponent, Page7Component, Page8Component, Page12Component, Page11Component, Page10Component, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
