import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../models/Relaxup';
import { MatTableDataSource,MatTableModule } from '@angular/material/table';
import { UsuarioService } from '../../../services/Relaxup.service';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterModule } from '@angular/router';


@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [MatTableModule,MatIconModule,RouterModule,RouterLink],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent implements OnInit{
  datasource: MatTableDataSource<Usuario> = new MatTableDataSource();
  displayedColumns:string[]=['c1','c2','c3','c4','c5','c6','c7','accion01','accion02']

  constructor(private re:UsuarioService){}
  ngOnInit(): void {
      this.re.list().subscribe(data=>{
        this.datasource=new MatTableDataSource(data)
      })
      this.re.getList().subscribe(data=>{
        this.datasource=new MatTableDataSource(data)
      })
  }
  delete(id:number){
    this.re.delete(id).subscribe(data=>{
    this.re.list().subscribe((data)=>{
    this.re.setList(data);
    })
    })
  }
}
