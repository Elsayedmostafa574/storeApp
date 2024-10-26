import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

export const authGuard: CanActivateFn = (route, state) => {
  const router =  inject(Router)
  const userPayload = localStorage.getItem('userLogin');
  if(userPayload && JSON.parse(userPayload)?.token){
    const token = jwtDecode(JSON.parse(userPayload)?.token);
    const date = new Date().getTime() / 1000;
    if(token && token.exp && date > token?.exp){
      router.navigate(['/login'])
      return false;
    }
    return true
  }else{
    router.navigate(['/login'])
      return false;
  }
};
