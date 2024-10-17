import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatIconModule
  ],
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent {
  constructor(private router: Router) {}

  logout() {
    // Remove the stored token and role from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('role');
    
    // Redirect to the login page (or homepage)
    this.router.navigate(['/']);
  }
}
