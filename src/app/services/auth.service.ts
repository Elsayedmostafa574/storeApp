import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { AuthResponse } from '../interfaces/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(
    this.checkLocalStorage()
);
  
  isLoggedIn$ = this.loggedIn.asObservable();
  constructor(private _http:HttpClient , private route : Router) { }
  callLogin(payload:AuthResponse):Observable<AuthResponse>{
    return this._http.post<AuthResponse>(`https://ecommerce.routemisr.com/api/v1/auth/signin` , payload).pipe(
      tap((res:any)=>{
        debugger
        if(res.token){
          localStorage.setItem('userLogin' , res.token);
          this.loggedIn.next(true);
        }
      })
    )
  }
  callLogout(){
    localStorage.removeItem('userLogin')
    this.loggedIn.next(false);
    this.route.navigate(['/login']);
  }
  callSignup(payload:AuthResponse):Observable<AuthResponse>{
    return this._http.post<AuthResponse>(`https://ecommerce.routemisr.com/api/v1/auth/signup` , payload)
  }



  private checkLocalStorage(): boolean {
    return !!localStorage.getItem('userLogin'); // Check for token presence
  }
}
