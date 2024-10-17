import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

@Component({
  selector: 'app-edit-user',
  standalone: true, // Set this to true for standalone component
  imports: [FormsModule, HttpClientModule], // Add FormsModule here
  templateUrl: './edit-user.component.html',
  styles: []
})
export class EditUserComponent implements OnInit {
  userId!: number; // Use '!' to assert that userId will be initialized
  user: { // Define the user object with specific types
    name: string;
    email: string;
    contactNumber: string;
    role: string;
  } = {
    name: '',
    email: '',
    contactNumber: '',
    role: ''
  };

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id')); // Get user ID from the route
    this.fetchUser(); // Fetch user data on initialization
  }

  fetchUser(): void {
    this.http.get<{ // Define the expected response type
      name: string;
      email: string;
      contactNumber: string;
      role: string;
    }>(`http://localhost:3000/users/${this.userId}`)
      .subscribe(
        user => {
          this.user = user; // Assign fetched user data to the user object
        },
        error => {
          console.error('Error fetching user:', error); // Handle error
        }
      );
  }

  saveChanges(): void {
    this.http.patch(`http://localhost:3000/users/${this.userId}`, this.user)
      .subscribe(
        () => {
          this.router.navigate(['/admin-dashboard']); // Navigate back to admin dashboard on success
        },
        error => {
          console.error('Error updating user:', error); // Handle error
        }
      );
  }
}
