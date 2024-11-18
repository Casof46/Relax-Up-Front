import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Chart, registerables } from 'chart.js';
import { ForosService } from '../../../services/foros.service';
@Component({
  selector: 'app-reporte-total-mensajes',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './reporte-total-mensajes.component.html',
  styleUrl: './reporte-total-mensajes.component.css'
})
export class ReporteTotalMensajesComponent implements OnInit{
barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: string[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartData: ChartDataset[] = [];

  constructor(private fS: ForosService) {}
  ngOnInit(): void {
    this.fS.getCantidadMensajeForos().subscribe((data) => {
      this.barChartLabels = data.map((item) => item.nameForo);
      this.barChartData = [
        {
          data: data.map((item) => item.CantidadMensajesForos),
          label: 'Cantidad de Foros',
          backgroundColor: ['#FF0000', '#ffac33', '#FF6347', '#FF7F50'],
          borderColor:'rgba(173,216,230,1)',
          borderWidth:1
        },
      ];
    });
  }
}
