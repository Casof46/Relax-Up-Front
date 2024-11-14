import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { Rol } from '../../../models/Rol';
import { RolService } from '../../../services/rol.service';
import { MatSnackBar } from '@angular/material/snack-bar'; 
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-rol-listar',
  standalone: true,
  imports: [MatTableModule, MatIconModule, RouterModule, MatPaginatorModule],
  templateUrl: './rol-listar.component.html',
  styleUrl: './rol-listar.component.css'
})
export class RolListarComponent implements OnInit{

  datasource: MatTableDataSource<Rol> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'accion01', 'accion02'];

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  constructor(private rS: RolService, private snackBar: MatSnackBar) {} 

  ngOnInit(): void {
    // Cargar la lista de planes
    this.rS.list().subscribe((data) => {
      this.datasource = new MatTableDataSource(data);
    });
    this.rS.getList().subscribe((data) => {
      this.datasource = new MatTableDataSource(data);
    });
  }

  ngAfterViewInit(): void {
    if (this.paginator) {
      this.datasource.paginator = this.paginator;
    }
  }

  // Método para eliminar un rol
  delete(id: number) {
    this.rS.delete(id).subscribe(
      (data) => {
        console.log('Respuesta de eliminación:', data);  // Agregar log para inspeccionar la respuesta
        this.rS.list().subscribe((data) => {
          this.rS.setList(data);
          this.snackBar.open('Rol eliminado con éxito', 'Cerrar', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top'
          });
        });
      },
      (error) => {
        console.error('Error al eliminar el Rol:', error);  // Agregar log para inspeccionar el error
        this.snackBar.open('Hubo un error al eliminar el rol', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top'
        });
      }
    );
  }
}
