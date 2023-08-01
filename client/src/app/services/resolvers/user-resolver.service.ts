import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';

import { IUser } from 'src/app/interfaces/User';
import { UserService } from '../user/user.service';
import { inject } from '@angular/core';

export const userResolver: ResolveFn<IUser> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(UserService).getSingleUser(route.paramMap.get('id') as string);
};
