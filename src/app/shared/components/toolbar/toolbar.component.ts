import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  public appName = 'IAS E-Commerce';
  public dataLocal: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.dataLocal = JSON.parse(localStorage.getItem('login'));
    console.log('dataLocal', this.dataLocal);
  }

  onLogout(): void {
    localStorage.removeItem('login');
    this.dataLocal = false;
    console.log(this.dataLocal);
    /*
    this.authService.logout()
      .subscribe(data => {
      });
    */
  }
}
