import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { UsuarioRutina } from '../../../models/UsuarioRutina';
import { Usuario } from '../../../models/Usuario';
import { UsuarioService } from '../../../services/usuario.service';
import { UsuarioRutinaService } from '../../../services/usuario-rutina.service';
import { Router } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';


@Component({
  selector: 'app-usuariorutina-registrar',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule
  ],
  templateUrl: './usuariorutina-registrar.component.html',
  styleUrl: './usuariorutina-registrar.component.css'
})
export class UsuariorutinaRegistrarComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  listaUsuario: Usuario[] = [];
  usuariorutina: UsuarioRutina = new UsuarioRutina();
  constructor(
    private formBuilder: FormBuilder,
    private usuarioservice: UsuarioService,
    private usuariorutinaservice: UsuarioRutinaService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      IdUsuarioRutina: ['', Validators.required],
      FechaRealizacion: ['', Validators.required],
      Progreso: ['', Validators.required],
      idUsuario: ['', Validators.required],
    });
    this.usuarioservice.list().subscribe((data) => {
      this.listaUsuario = data;
    });
  }
  insertar(): void {
    if (this.form.valid) {
      this.usuariorutina.idusuariorutina = this.form.value.IdUsuarioRutina;
      this.usuariorutina.fecharealizacion = this.form.value.FechaRealizacion;
      this.usuariorutina.progreso = this.form.value.Progreso;
      this.usuariorutina.usuario.idUsuario = this.form.value.idUsuario;
      this.usuariorutinaservice.insert(this.usuariorutina).subscribe((data) => {
        this.usuariorutinaservice.list().subscribe((data) => {
          this.usuariorutinaservice.setList(data);
        });
      });
      this.router.navigate(['UsuarioRutina']);
    }
  }
}
