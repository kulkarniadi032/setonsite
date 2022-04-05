import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TwelvethPageService {
  constructor(private http: HttpClient) {}
  createpage12DataService(data: any) {
    console.log('this is page 12 service data');

    console.log(data);
  }
}
