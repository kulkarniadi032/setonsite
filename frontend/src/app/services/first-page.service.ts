import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FirstPageService {
  constructor(private http: HttpClient) {}
  firstPageDataForPdf: any;

  createPage1DataService(data: any) {
    this.firstPageDataForPdf = data;
    return this.http.post('http://localhost:5000/api/v1/page1', data);
  }
  getAllPage1DataService() {
    return this.http.get('http://localhost:5000/api/v1/page1');
  }
  deletePage1DataService(id: any) {
    return this.http.delete(`http://localhost:5000/api/v1/page1/${id}`);
  }
}
