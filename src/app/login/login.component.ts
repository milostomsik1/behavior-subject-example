import { SharedService } from './../services/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private shared: SharedService) { }

  loginClient(): void {
    this.shared.isLogged$.next(true);
    this.shared.isAdmin$.next(false);
  }

  loginAdmin(): void {
    this.shared.isLogged$.next(true);
    this.shared.isAdmin$.next(true);
  }

  logout(): void {
    this.shared.isLogged$.next(false);
    this.shared.isAdmin$.next(false);
  }

  ngOnInit() {
  }

}
