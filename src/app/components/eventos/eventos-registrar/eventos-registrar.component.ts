import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../models/Usuario';
import { Eventos } from '../../../models/Eventos';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';
import { EventosService } from '../../../services/eventos.service';
import { Router } from '@angular/router';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-eventos-registrar',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    ReactiveFormsModule,
    MatDatepicker,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonModule,
  ],
  templateUrl: './eventos-registrar.component.html',
  styleUrl: './eventos-registrar.component.css'
})
export class EventosRegistrarComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  listaUsuario: Usuario[] = [];
  usuariorutina: Eventos = new Eventos();
  constructor(
    private formBuilder: FormBuilder,
    private usuarioservice: UsuarioService,
    private usuariorutinaservice: EventosService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      IdEventos: ['', Validators.required],
      Titulo: ['', Validators.required],
      Actividad: ['', Validators.required],
      FechaInicio: ['', Validators.required],
      FechaFin: ['', Validators.required],
      Hora: ['', Validators.required],
      Confirmacion: ['', Validators.required],
      IdUsuario: ['', Validators.required],

    });
    this.usuarioservice.list().subscribe((data) => {
      this.listaUsuario = data;
    });
  }
  insertar(): void {
    if (this.form.valid) {
      this.usuariorutina.ideventos = this.form.value.IdEventos;
      this.usuariorutina.titulo = this.form.value.Titulo;
      this.usuariorutina.actividad = this.form.value.Actividad;
      this.usuariorutina.fechaInicio = this.form.value.FechaInicio;
      this.usuariorutina.fechaFin = this.form.value.FechaFin;
      this.usuariorutina.hora = this.form.value.Hora;
      this.usuariorutina.confirmacion = this.form.value.Confirmacion;
      this.usuariorutina.usuario.idUsuario = this.form.value.IdUsuario;
      this.usuariorutinaservice.insert(this.usuariorutina).subscribe((data) => {
        this.usuariorutinaservice.list().subscribe((data) => {
          this.usuariorutinaservice.setList(data);
        });
      });
      this.router.navigate(['eventos']);
    }
  }
}