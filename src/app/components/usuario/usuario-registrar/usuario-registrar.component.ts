import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Rol } from '../../../models/Rol';
import { Usuario } from '../../../models/Usuario';
import { UsuarioService } from '../../../services/usuario.service';
import { RolserviceService } from '../../../services/rolservice.service';
import { NgIf } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-usuario-registrar',
  standalone: true,
  imports: [    
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    NgIf
],
  templateUrl: './usuario-registrar.component.html',
  styleUrl: './usuario-registrar.component.css'
})
export class UsuarioRegistrarComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  listaRoles: Rol[] = [];
  user: Usuario = new Usuario();
  constructor(
    private formBuilder: FormBuilder,
    private uS: UsuarioService,
    private rS: RolserviceService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      unombre: ['', [Validators.required,Validators.minLength(3)]],
      ucorreo: ['', [Validators.required,Validators.email]],
      utelefono: ['', [Validators.required,Validators.min(900000000),Validators.max(999999999),Validators.pattern(/^\d+$/)]],
      ucontrasena: ['', [Validators.required, Validators.minLength(8)]],
      uprogreso: ['', [Validators.required,Validators.min(0),Validators.max(100),Validators.pattern(/^\d+$/)]],
      urol: ['', Validators.required],
    });
    this.rS.list().subscribe((data) => {
      this.listaRoles = data;
    });
  }
  insertar(): void {
    if (this.form.valid) {
      this.user.nombreUsuario = this.form.value.unombre;
      this.user.correoUsuario = this.form.value.ucorreo;
      this.user.telefonoUsuario = this.form.value.utelefono;
      this.user.contrasenaUsuario = this.form.value.ucontrasena;
      this.user.progresoUsuario = this.form.value.uprogreso;
      this.user.rol.idRol = this.form.value.urol;
      this._snackBar.open('Usuario creado con éxito!', 'Cerrar', {
        duration: 3000
      })
      this.uS.insert(this.user).subscribe((data) => {
        this.uS.list().subscribe((data) => {
          this.uS.setList(data);
        });
      });
      this.router.navigate(['usuarios']);
    }
  }
}