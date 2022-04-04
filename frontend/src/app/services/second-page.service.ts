import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SecondPageService {
  constructor(private http: HttpClient) {}
  page2Data: any;
  createPage2DataService(data: any) {
    this.page2Data = data;
    return this.http.post('http://localhost:5000/api/v1/page2', data);
  }
  getAllPage2DataService() {
    return this.http.get('http://localhost:5000/api/v1/page2');
  }
}
