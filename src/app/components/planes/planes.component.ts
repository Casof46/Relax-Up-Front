import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarComponent } from './listar/listar.component';

@Component({
  selector: 'app-planes',
  standalone: true,
  imports: [RouterOutlet,ListarComponent],
  templateUrl: './planes.component.html',
  styleUrl: './planes.component.css'
})
export class PlanesComponent {
  constructor(public route:ActivatedRoute) {}
}
