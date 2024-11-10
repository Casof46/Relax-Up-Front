import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink, RouterModule } from '@angular/router';
import { Rol } from '../../../models/Rol';
import { RolserviceService } from '../../../services/rolservice.service';

@Component({
  selector: 'app-rol-listar',
  standalone: true,
  imports: [MatTableModule,MatIconModule,RouterModule,RouterLink],
  templateUrl: './rol-listar.component.html',
  styleUrl: './rol-listar.component.css'
})
export class RolListarComponent implements OnInit{
  datasource:MatTableDataSource<Rol>=new MatTableDataSource();
  displayedColumns:string[]=['c1','c2','accion01','accion02']

  constructor(private rolservice:RolserviceService){}
  ngOnInit(): void {
      this.rolservice.list().subscribe(data=>{
        this.datasource=new MatTableDataSource(data)
      })
      this.rolservice.getList().subscribe(data=>{
        this.datasource=new MatTableDataSource(data)
      })
  }
  delete(id: number) {
    this.rolservice.delete(id).subscribe((data) => {
      this.rolservice.list().subscribe((data) => {
        this.rolservice.setList(data);
      });
    });
  }
}
