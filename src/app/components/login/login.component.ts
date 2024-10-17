import {ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {FormControl, FormsModule, ReactiveFormsModule, Validators, FormBuilder, FormGroup} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatTabsModule,
    MatFormFieldModule,
    FormsModule, 
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    NgIf,
    HttpClientModule
    
  ],
  templateUrl: './login.component.html',
  styles: ``
})


export class LoginComponent {
  hide = true;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.http.post('http://localhost:3000/auth/login', this.loginForm.value)
        .subscribe((response: any) => {
          const { access_token, role } = response;
          
          // Store token and role in localStorage
          localStorage.setItem('access_token', access_token);
          localStorage.setItem('role', role);
  
          // Redirect based on the user's role
          if (role === 'admin') {
            this.router.navigate(['/admin-dashboard']);
          } else if (role === 'user') {
            this.router.navigate(['/user-dashboard']);
          }
        }, (error) => {
          console.error('Login failed', error);
        });
    }
  }
  
}