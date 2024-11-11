import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink, RouterModule } from '@angular/router';
import { Rutina } from '../../../models/Rutina';
import { RutinaService } from '../../../services/rutina.service';
@Component({
  selector: 'app-rutina-listar',
  standalone: true,
  imports: [MatTableModule, MatIconModule, RouterModule, RouterLink],
  templateUrl: './rutina-listar.component.html',
  styleUrl: './rutina-listar.component.css'
})
export class RutinaListarComponent implements OnInit{
  datasource: MatTableDataSource<Rutina> = new MatTableDataSource();
  displayedColumns:string[]=['c1', 'c2', 'c3', 'c4', 'c5', 'accion01', 'accion02']
  constructor(private Rutina:RutinaService){}
  ngOnInit(): void {
  this.Rutina.list().subscribe(data=>{
    this.datasource = new MatTableDataSource(data)
  });
  this.Rutina.getList().subscribe(data=>{
    this.datasource = new MatTableDataSource(data);
  })
  }
  delete(id: number) {
    this.Rutina.delete(id).subscribe({
      next: (data) => {
        this.Rutina.list().subscribe((data) => {
          this.Rutina.setList(data);
        });
      },
      error: (err) => {
        console.error('Delete failed', err);
      }
    });
  }
}
