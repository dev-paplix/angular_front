import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { TimesheetComponent } from './components/timesheet/timesheet.component';
import { AuthGuard } from './auth.guard'; // Import the AuthGuard
import { RoleGuard } from './role.guard'; // Import the RoleGuard

export const routes: Routes = [
  { 
    path: 'timesheet', 
    component: TimesheetComponent, 
    // canActivate: [AuthGuard, RoleGuard], // Protect with both AuthGuard and RoleGuard
    // data: { role: 'admin' } // Restrict to 'admin' role
  },
  { 
    path: 'admin-dashboard', 
    component: AdminDashboardComponent, 
    canActivate: [AuthGuard, RoleGuard], // Protect with both AuthGuard and RoleGuard
    data: { role: 'admin' } // Restrict to 'admin' role
  },
  { path: 'edit-user/:id', 
    component: EditUserComponent,
    canActivate: [AuthGuard, RoleGuard], // Protect with both AuthGuard and RoleGuard
    data: { role: 'admin' } // Restrict to 'admin' role
    },
  { 
    path: 'user-dashboard', 
    component: UserDashboardComponent, 
    canActivate: [AuthGuard, RoleGuard], // Protect with both AuthGuard and RoleGuard
    data: { role: 'user' } // Restrict to 'user' role
  },

  { path: '', component: LoginComponent }, // Public login route
];
