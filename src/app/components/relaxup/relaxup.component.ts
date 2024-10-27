import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarComponent } from './listar/listar.component';

@Component({
  selector: 'app-relaxup',
  standalone: true,
  imports: [RouterOutlet,ListarComponent],
  templateUrl: './relaxup.component.html',
  styleUrl: './relaxup.component.css'
})
export class RelaxupComponent {
  constructor(public route:ActivatedRoute){}
}
