import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink, RouterModule } from '@angular/router';
import { MensajesForos } from '../../../models/MensajesForos';
import { MensajeforoComponent } from '../mensajeforo.component';
import { MensajeforoService } from '../../../services/mensajeforo.service';
@Component({
  selector: 'app-mensajeforo-listar',
  standalone: true,
  imports: [MatTableModule, MatIconModule, RouterModule, RouterLink],
  templateUrl: './mensajeforo-listar.component.html',
  styleUrl: './mensajeforo-listar.component.css'
})
export class MensajeforoListarComponent {
  datasource: MatTableDataSource<MensajesForos> = new MatTableDataSource();
  displayedColumns:string[]=['c1', 'c2', 'c3', 'c4','c5' ,'accion01', 'accion02']
  constructor(private mensajesforos:MensajeforoService){}
  ngOnInit(): void {
  this.mensajesforos.list().subscribe(data=>{
    this.datasource = new MatTableDataSource(data)
  });
  this.mensajesforos.getList().subscribe(data=>{
    this.datasource = new MatTableDataSource(data);
  })
  }
  delete(id: number) {
    this.mensajesforos.delete(id).subscribe({
      next: (data) => {
        this.mensajesforos.list().subscribe((data) => {
          this.mensajesforos.setList(data);
        });
      },
      error: (err) => {
        console.error('Delete failed', err);
      }
    });
  }
}
