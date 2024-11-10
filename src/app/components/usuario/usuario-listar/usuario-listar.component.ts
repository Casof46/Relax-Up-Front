import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink, RouterModule } from '@angular/router';
import { Usuario } from '../../../models/Usuario';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-usuario-listar',
  standalone: true,
  imports: [MatTableModule, MatIconModule, RouterModule, RouterLink],
  templateUrl: './usuario-listar.component.html',
  styleUrl: './usuario-listar.component.css'
})
export class UsuarioListarComponent implements OnInit{
  datasource: MatTableDataSource<Usuario> = new MatTableDataSource();
  displayedColumns:string[]=['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'accion01', 'accion02']
  constructor(private usuario:UsuarioService){}
  ngOnInit(): void {
  this.usuario.list().subscribe(data=>{
    this.datasource = new MatTableDataSource(data)
  });
  this.usuario.getList().subscribe(data=>{
    this.datasource = new MatTableDataSource(data);
  })
  }
  delete(id:number){
    this.usuario.delete(id).subscribe(data=>{
      this.usuario.list().subscribe((data)=>{
        this.usuario.setList(data)
      })
    })
  }

}
