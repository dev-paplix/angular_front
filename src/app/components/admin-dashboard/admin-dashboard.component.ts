import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';

export interface User {
  id: number; // Add id to User interface
  name: string;
  email: string;
  contactNumber: string;
  role: string;
}

@Component({
  selector: 'admin-dashboard',
  standalone: true,
  templateUrl: './admin-dashboard.component.html',
  imports: [HttpClientModule, MatTableModule],
  styles: []
})
export class AdminDashboardComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'contactNumber', 'role', 'delete', 'edit'];
  dataSource: User[] = [];

  constructor(private http: HttpClient, private router: Router) {}
  editUser(id: number): void {
    this.router.navigate([`/edit-user/${id}`]);
  }
  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.http.get<User[]>('http://localhost:3000/users')
      .subscribe(users => {
        this.dataSource = users;
      });
  }

  deleteUser(id: number): void {
    this.http.delete(`http://localhost:3000/users/${id}`)
      .subscribe(() => {
        // Remove the deleted user from the dataSource
        this.dataSource = this.dataSource.filter(user => user.id !== id);
      });


  }
}