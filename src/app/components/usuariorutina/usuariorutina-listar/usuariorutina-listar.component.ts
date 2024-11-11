import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { UsuarioRutina } from '../../../models/UsuarioRutina';
import { UsuarioRutinaService } from '../../../services/usuario-rutina.service';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-usuariorutina-listar',
  standalone: true,
  imports: [MatTableModule,MatIconModule,RouterModule],
  templateUrl: './usuariorutina-listar.component.html',
  styleUrl: './usuariorutina-listar.component.css'
})
export class UsuariorutinaListarComponent {
  datasource: MatTableDataSource<UsuarioRutina> = new MatTableDataSource();
  displayedColumns: string[] = ['c1','c2','c3','c4'];
  constructor(private urs: UsuarioRutinaService) {}
  ngOnInit(): void {
    this.urs.list().subscribe((data) => {
      this.datasource = new MatTableDataSource(data);
    });
    this.urs.getList().subscribe((data) => {
      this.datasource = new MatTableDataSource(data);
    });
  }
}
