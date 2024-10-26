import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  constructor(private route: Router, private _auth: AuthService) {}
  ngOnInit(): void {
    this._auth.isLoggedIn$.subscribe({
      next : (loggedIn)=>{
        this.isLoggedIn = loggedIn;
      }
    });
  }

  userLog(): void {
    const userPayload = localStorage.getItem('userLogin');
    if (userPayload) {
      this.route.navigate(['/profile']);
    } else {
      this.route.navigate(['/login']);
    }
  }
  logout() : void{
    this._auth.callLogout();
  }
}
