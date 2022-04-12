import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  loginFormDataService(data: any) {
    console.log('data reach at service level');
    console.log(data);
    return this.http.post('http://localhost:5000/api/v1/loginUser', data);
  }
}
