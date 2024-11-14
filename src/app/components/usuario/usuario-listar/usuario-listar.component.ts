import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Usuario } from '../../../models/Usuario';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-usuario-listar',
  standalone: true,
  imports: [
    MatTableModule,
  ],
  templateUrl: './usuario-listar.component.html',
  styleUrl: './usuario-listar.component.css'
})
export class UsuarioListarComponent implements OnInit{
  datasource: MatTableDataSource<Usuario> = new MatTableDataSource();
  displayedColumns: string[] = [
    'ctt1',
    'ctt2',
    'ctt3',
    'ctt4',
    'ctt5',
    'ctt6',
    'ctt7',
  ];

  constructor(private uS: UsuarioService) {}
  ngOnInit(): void {
    this.uS.list().subscribe((data) => {
      this.datasource = new MatTableDataSource(data);
    });
    this.uS.getList().subscribe((data) => {
      this.datasource = new MatTableDataSource(data);
    });
  }
}
