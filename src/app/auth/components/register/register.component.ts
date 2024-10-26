import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  signupForm!: FormGroup;
  constructor(
    private _authService: AuthService,
    private FB: FormBuilder,
    private _router: Router
  ) {}
  ngOnInit(): void {
    this.signup();
  }
  signup(): void {
    const StrongPasswordRegx: RegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
    this.signupForm = this.FB.group({
      name: new FormControl('' , Validators.required),
      email: new FormControl('' , {
        validators : [Validators.required , Validators.email]
      }),
      password: new FormControl('',{
        validators : [Validators.required , Validators.pattern(StrongPasswordRegx)]
      }),
      rePassword: new FormControl('' , {
        validators : [Validators.required , Validators.pattern(StrongPasswordRegx)]
      }),
      phone: new FormControl('' , Validators.required),
    });
  }

  setSignup(): void {
    this._authService.callSignup(this.signupForm.value).subscribe({
      next: (res) => {
        debugger;
        console.log(this.signupForm.value);
        console.log(res);
        this._router.navigate(['/login']);
      },
      error: (err) => {
        debugger
        console.log(err);
      },
    });
  }
}
