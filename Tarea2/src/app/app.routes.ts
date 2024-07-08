import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { AppLayoutComponent } from './components/app-layout/app-layout.component';
import { SigUpComponent } from './pages/auth/sign-up/signup.component';
import { UsersComponent } from './pages/users/users.component';
import { AuthGuard } from './guards/auth.guard';
import { AccessDeniedComponent } from './pages/access-denied/access-denied.component';
import { AdminRoleGuard } from './guards/admin-role.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GuestGuard } from './guards/guest.guard';
import { IRoleType } from './interfaces';
import { ProfileComponent } from './pages/profile/profile.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ProductsComponent } from './pages/products/products.component'

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [GuestGuard],
  },
  {
    path: 'signup',
    component: SigUpComponent,
    canActivate: [GuestGuard],
  },
  {
    path: 'access-denied',
    component: AccessDeniedComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'app',
    component: AppLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'app',
        redirectTo: 'users',
        pathMatch: 'full',
      },
      {
        path: 'users',
        component: UsersComponent,
        canActivate:[AdminRoleGuard],
        data: { 
          authorities: [ 
            IRoleType.superAdmin
          ],
          showInSidebar: true,
          name: 'Users'
        }
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { 
          authorities: [
            IRoleType.superAdmin,
            IRoleType.user
          ],
          showInSidebar: true,
          name: 'Dashboard'
        }
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: { 
          authorities: [ 
            IRoleType.superAdmin,
            IRoleType.user
          ],
          showInSidebar: false,
          name: 'profile'
        }
      },
      {
        path: 'categories',
        component: CategoriesComponent,
        data: { 
          authorities: [
            IRoleType.superAdmin,
            IRoleType.user
          ],
          showInSidebar: true,
          name: 'categories'
        }
      },
      {
        path: 'products',
        component: ProductsComponent,
        data: { 
          authorities: [ 
            IRoleType.superAdmin,
            IRoleType.user
          ],
          showInSidebar: true,
          name: 'products'
        }
      }
    ],
  },
];
