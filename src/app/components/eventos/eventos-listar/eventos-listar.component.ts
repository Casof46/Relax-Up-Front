import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Eventos } from '../../../models/Eventos';
import { EventosService } from '../../../services/eventos.service';

@Component({
  selector: 'app-eventos-listar',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './eventos-listar.component.html',
  styleUrl: './eventos-listar.component.css'
})
export class EventosListarComponent implements OnInit{
  datasource: MatTableDataSource<Eventos> = new MatTableDataSource();
  displayedColumns: string[] = ['c1','c2','c3','c4','c5','c6','c7','c8'];
  constructor(private eventosservice:EventosService){}
  ngOnInit(): void {
      this.eventosservice.list().subscribe((data)=>{
        this.datasource=new MatTableDataSource(data)
      })
      this.eventosservice.getList().subscribe((data)=>{
        this.datasource=new MatTableDataSource(data)
      })
  }
}
