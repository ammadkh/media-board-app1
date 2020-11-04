import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  group: FormGroup;
  user: User;
  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthService
    ) {
    this.group = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  matcher = new MyErrorStateMatcher();

  ngOnInit() {
  }

  onLogin(event) {
    if(this.group.invalid) {
      return;
    }
    this.authService.getAuthToken(this.group.value.email, this.group.value.password).subscribe(
      res => {
        this.user = res;
        console.log(this.user);
        this.router.navigate(['/home']);
      }
    ), (error) => console.log(error);
  }

}
