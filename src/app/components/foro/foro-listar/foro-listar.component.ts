import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink, RouterModule } from '@angular/router';
import { Foros } from '../../../models/Foros';
import { ForosService } from '../../../services/foros.service';
@Component({
  selector: 'app-foro-listar',
  standalone: true,
  imports: [MatTableModule, MatIconModule, RouterModule, RouterLink],
  templateUrl: './foro-listar.component.html',
  styleUrl: './foro-listar.component.css'
})
export class ForoListarComponent {
  datasource: MatTableDataSource<Foros> = new MatTableDataSource();
  displayedColumns:string[]=['c1', 'c2', 'c3','accion01','accion02']
  constructor(private foros:ForosService){}
  ngOnInit(): void {
  this.foros.list().subscribe(data=>{
    this.datasource = new MatTableDataSource(data)
  });
  this.foros.getList().subscribe(data=>{
    this.datasource = new MatTableDataSource(data);
  })
  }
  delete(id: number) {
    this.foros.delete(id).subscribe({
      next: (data) => {
        this.foros.list().subscribe((data) => {
          this.foros.setList(data);
        });
      },
      error: (err) => {
        console.error('Delete failed', err);
      }
    });
  }
}
