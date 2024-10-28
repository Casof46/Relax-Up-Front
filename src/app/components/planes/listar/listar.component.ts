import { Component, OnInit } from '@angular/core';
import { Planes } from '../../../models/planes';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { PlanesService } from '../../../services/planes.service';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [MatTableModule, MatIconModule,RouterModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css',
})
export class ListarComponent implements OnInit {
  
  datasource: MatTableDataSource<Planes> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'accion01','accion02'];

  constructor(private cS: PlanesService) {}
  ngOnInit(): void {
    this.cS.list().subscribe((data) => {
      this.datasource = new MatTableDataSource(data);
    });
    this.cS.getList().subscribe((data) => {
      this.datasource = new MatTableDataSource(data);
    });
  }

  delete(id: number) {
    this.cS.delete(id).subscribe((data) => {
      this.cS.list().subscribe((data) => {
        this.cS.setList(data);
      });
    });
  }
}
