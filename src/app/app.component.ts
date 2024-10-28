import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PlanesComponent } from './components/planes/planes.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PlanesComponent,
    MatToolbarModule,
    RouterLink,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'PabloDev';
}
