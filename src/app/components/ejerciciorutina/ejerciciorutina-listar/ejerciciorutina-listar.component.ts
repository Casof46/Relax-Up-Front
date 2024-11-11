import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink, RouterModule } from '@angular/router';
import { EjercicioRutina } from '../../../models/EjercicioRutina';
import { EjerciciorutinaService } from '../../../services/ejerciciorutina.service';
@Component({
  selector: 'app-ejerciciorutina-listar',
  standalone: true,
  imports: [MatTableModule, MatIconModule, RouterModule, RouterLink],
  templateUrl: './ejerciciorutina-listar.component.html',
  styleUrl: './ejerciciorutina-listar.component.css'
})
export class EjerciciorutinaListarComponent implements OnInit{
  datasource: MatTableDataSource<EjercicioRutina> = new MatTableDataSource();
  displayedColumns:string[]=['c1', 'c2', 'c3', 'c4', 'accion01', 'accion02']
  constructor(private ejerciciorutina:EjerciciorutinaService){}
  ngOnInit(): void {
  this.ejerciciorutina.list().subscribe(data=>{
    this.datasource = new MatTableDataSource(data)
  });
  this.ejerciciorutina.getList().subscribe(data=>{
    this.datasource = new MatTableDataSource(data);
  })
  }
  delete(id: number) {
    this.ejerciciorutina.delete(id).subscribe({
      next: (data) => {
        this.ejerciciorutina.list().subscribe((data) => {
          this.ejerciciorutina.setList(data);
        });
      },
      error: (err) => {
        console.error('Delete failed', err);
      }
    });
  }
}
