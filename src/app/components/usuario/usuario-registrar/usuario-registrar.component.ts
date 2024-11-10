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
  listaRol: Rol[] = [];
  usuario: Usuario = new Usuario();

  constructor(
    private formBuilder: FormBuilder,
    private rolservice: RolserviceService,
    private usuarioservice: UsuarioService,
    private router: Router,
  ) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      IdUsuario:[''],
      NombreUsuario:['',Validators.required],
      CorreoUsuario:['',Validators.required],
      TelefonoUsuario:['',Validators.required],
      ContrasenaUsuario:['',Validators.required],
      ProgresoUsuario:['',Validators.required],
      RolUsuario:['',Validators.required],
    });
    this.rolservice.list().subscribe((data) => {
      this.listaRol = data;
    });
  }
  insertar(): void {
    if(this.form.valid){
      this.usuario.idUsuario=this.form.value.IdUsuario;
      this.usuario.nombreUsuario=this.form.value.NombreUsuario
      this.usuario.correoUsuario=this.form.value.CorreoUsuario
      this.usuario.telefonoUsuario=this.form.value.TelefonoUsuario
      this.usuario.contasenaUsuario=this.form.value.ContrasenaUsuario
      this.usuario.progresoUsuario=this.form.value.ProgresoUsuario
      this.usuario.rol.idRol=this.form.value.RolUsuario
        this.usuarioservice.insert(this.usuario).subscribe((data) => {
          this.usuarioservice.list().subscribe((data) => {
            this.usuarioservice.setList(data);
          });
        });
        this.router.navigate(['usuarios'])
      }
  }
}
