import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink, RouterModule } from '@angular/router';
import { TecnicasRelajacion } from '../../../models/TecnicasRelajacion';
import { TecnicarelajacionService } from '../../../services/tecnicarelajacion.service';

@Component({
  selector: 'app-tecnicarelajacion-listar',
  standalone: true,
  imports: [MatTableModule, MatIconModule, RouterModule, RouterLink],
  templateUrl: './tecnicarelajacion-listar.component.html',
  styleUrl: './tecnicarelajacion-listar.component.css',
})
export class TecnicarelajacionListarComponent implements OnInit {
  datasource: MatTableDataSource<TecnicasRelajacion> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'accion01', 'accion02'];

  constructor(private tecnicarelajacionservice: TecnicarelajacionService) {}
  ngOnInit(): void {
    this.tecnicarelajacionservice.list().subscribe((data) => {
      this.datasource = new MatTableDataSource(data);
    });
    this.tecnicarelajacionservice.getList().subscribe((data) => {
      this.datasource = new MatTableDataSource(data);
    });
  }
  delete(id: number) {
    this.tecnicarelajacionservice.delete(id).subscribe((data) => {
      this.tecnicarelajacionservice.list().subscribe((data) => {
        this.tecnicarelajacionservice.setList(data);
      });
    });
  }
}
