import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

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
    MatIconModule
    
  ],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}
