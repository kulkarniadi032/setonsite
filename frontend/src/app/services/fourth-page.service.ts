import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FourthPageService {
  constructor(private http: HttpClient) {}
  createPage4ServiceData(data: any) {
    console.log('****************');
    console.log(data);
  }
}
