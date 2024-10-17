import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,

  ],
  template: `
    <app-header></app-header>
  `,
  styles: [],
})
export class AppComponent {
  title = 'user-front';
}
