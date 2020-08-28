import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { UserI } from '../../../shared/models/user.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  loginForm = new FormGroup({
    document: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  ngOnInit(): void {

  }

  localStorage(data) {
    localStorage.setItem('login', JSON.stringify(data));
  }


  onLogin(form: UserI) {
    this.authService.login(form)
      .subscribe(data => {
        if(data.ok == true) {
          this.localStorage(data);
          
         //location.reload();
          this.router.navigate(['/']);
        }
      });
  }
}
