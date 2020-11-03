import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { AuthService } from '../services/auth.service';

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
  constructor(private fb: FormBuilder,
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
    this.authService.getAuthToken(this.group.value.email, this.group.value.password);
    console.log(event);
  }

}
