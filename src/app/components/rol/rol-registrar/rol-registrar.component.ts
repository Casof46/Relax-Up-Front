import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Rol } from '../../../models/Rol';
import { RolService } from '../../../services/rol.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-rol-registrar',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './rol-registrar.component.html',
  styleUrl: './rol-registrar.component.css'
})
export class RolRegistrarComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  rol: Rol = new Rol();
  id: number = 0;
  edicion: boolean = false;

  constructor(
    private rS: RolService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar  // Inyectar MatSnackBar
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] > 0;
      this.init();
    });

    this.form = this.formBuilder.group({
      rolcodigo: [''],
      rolnombre: ['', Validators.required],
    });
  }

  insertar(): void {
    if (this.form.valid) {
      this.rol.idRol = this.form.value.rolcodigo;
      this.rol.nombreRol = this.form.value.rolnombre;
      if (this.edicion) {
        // Actualizar rol
        this.rS.update(this.rol).subscribe(
          (data) => {
            this.rS.list().subscribe((data) => {
              this.rS.setList(data);
            });
            this.snackBar.open('Rol actualizado con éxito', 'Cerrar', {
              duration: 3000, // Duración del mensaje
              horizontalPosition: 'right',
              verticalPosition: 'top'
            });
          },
          (error) => {
            this.snackBar.open('Error al actualizar el rol', 'Cerrar', {
              duration: 3000,
              horizontalPosition: 'right',
              verticalPosition: 'top'
            });
          }
        );
      } else {
        // Insertar rol
        this.rS.insert(this.rol).subscribe(
          (data) => {
            this.rS.list().subscribe((data) => {
              this.rS.setList(data);
            });
            this.snackBar.open('Rol registrado con éxito', 'Cerrar', {
              duration: 3000, // Duración del mensaje
              horizontalPosition: 'right',
              verticalPosition: 'top'
            });
          },
          (error) => {
            this.snackBar.open('Error al registrar el rol', 'Cerrar', {
              duration: 3000,
              horizontalPosition: 'right',
              verticalPosition: 'top'
            });
          }
        );
      }
    } 

    this.router.navigate(['rol']);
  }

  init() {
    if (this.edicion) {
      this.rS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          rolcodigo: new FormControl(data.idRol),
          rolnombre: new FormControl(data.nombreRol),
        });
      });
    }
  }
}
