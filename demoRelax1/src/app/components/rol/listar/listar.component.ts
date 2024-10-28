import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { Rol } from '../../../models/Rol';
import { RolService } from '../../../services/rol.service';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [MatTableModule, MatIconModule, RouterModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css',
})
export class ListarComponent implements OnInit {
  datasource: MatTableDataSource<Rol> = new MatTableDataSource();
  displayedColumns: string[] = ['r1', 'r2', 'accion01', 'accion02'];

  constructor(private rS: RolService) {}
  ngOnInit(): void {
    this.rS.list().subscribe((data) => {
      this.datasource = new MatTableDataSource(data);
    });
    this.rS.getList().subscribe((data) => {
      this.datasource = new MatTableDataSource(data);
    });
  }

  delete(id: number) {
    this.rS.delete(id).subscribe((data) => {
      this.rS.list().subscribe((data) => {
        this.rS.setList(data);
      });
    });
  }
}
