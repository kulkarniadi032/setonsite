import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private login: LoginService, private router: Router) {}

  ngOnInit(): void {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  isSuccessTrue: boolean = false;
  isSuccessFalse: boolean = false;
  loginFormData(data: any) {
    console.log(data.value);
    this.login.loginFormDataService(data.value).subscribe((resultData: any) => {
      console.log(resultData);
      if (resultData.success == true) {
        this.isSuccessTrue = true;
        localStorage.setItem('setOnSitetoken', resultData.token);
        setTimeout(() => {
          this.isSuccessTrue = false;
          this.router.navigate(['/page1']);
        }, 2000);
      } else {
        this.isSuccessFalse = true;
        setTimeout(() => {
          this.isSuccessFalse = false;
        }, 5000);
      }
    });
    setTimeout(() => {}, 2000);
    this.loginForm.reset();
  }
}
