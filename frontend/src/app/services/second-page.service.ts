import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SecondPageService {
  constructor(private http: HttpClient) {}
  createPage2DataService(data: any) {
    return this.http.post('http://localhost:5000/api/v1/page2', data);
  }
  getAllPage2DataService() {
    return this.http.get('http://localhost:5000/api/v1/page2');
  }
}
