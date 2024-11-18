import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ReporteTotalIngresosComponent } from './reporte-total-ingresos/reporte-total-ingresos.component';

@Component({
  selector: 'app-reporte',
  standalone: true,
  imports: [RouterOutlet, ReporteTotalIngresosComponent],
  templateUrl: './reporte.component.html',
  styleUrl: './reporte.component.css'
})
export class ReporteComponent {
  constructor(public route: ActivatedRoute) {}
}