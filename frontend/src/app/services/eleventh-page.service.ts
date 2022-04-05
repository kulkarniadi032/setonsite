import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EleventhPageService {
  constructor(private http: HttpClient) {}
  createpage11DataService(data: any) {
    console.log('this is the page 11 service');
    console.log(data);
  }
}
