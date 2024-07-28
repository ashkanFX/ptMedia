import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  let userLogin = JSON.parse(sessionStorage.getItem('userdetails')!)
  debugger
  if (userLogin) {
    return true
  } else {
    router.navigate(['/login']);
    return false;
  }

};
