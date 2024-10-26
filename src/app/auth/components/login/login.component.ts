import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm! : FormGroup;
  errorMessage = '';
  successMessage = '';
  constructor(private FB : FormBuilder , private _authService:AuthService , private _router:Router){}
  ngOnInit(): void {
    this.initLoginForm();
  }
  initLoginForm():void{
    const StrongPasswordRegx: RegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
    this.loginForm =  this.FB.group({
      email: new FormControl('' , {
        validators : [Validators.required , Validators.email]
      }),
      password: new FormControl('',{
        validators : [Validators.required , Validators.pattern(StrongPasswordRegx)]
    })})
  }

  submitLoginForm() : void{
    this._authService.callLogin(this.loginForm.value).subscribe({
      next : (res)=>{
       localStorage.setItem('userLogin' , JSON.stringify(res));
       const UserToken = localStorage.getItem('userLogin')
       this.successMessage = res.message;
       setTimeout(() => {
        if(UserToken){
          this._router.navigate(['/home']);
        }
       }, 2000);
     
        
      },
      error : (err)=>{
        this.errorMessage = err.error.message
        
        
      },
      complete : ()=>{
        console.log("Login Successfully !");
        
      }
    })
  }
}
