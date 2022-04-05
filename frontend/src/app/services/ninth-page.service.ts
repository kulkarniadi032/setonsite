import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NinthPageService {
  constructor(private http: HttpClient) {}
  createPage9DataService(data: any) {
    console.log('this is data from service 9');
    console.log(data);
  }
}
