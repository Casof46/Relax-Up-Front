import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { MensajesForos } from '../../../models/MensajesForos';
import { Foros } from '../../../models/Foros';
import { Usuario } from '../../../models/Usuario';
import { MensajeforoService } from '../../../services/mensajeforo.service';
import { UsuarioService } from '../../../services/usuario.service';
import { ForosService } from '../../../services/foros.service';
@Component({
  selector: 'app-mensajeforo-registrar',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    NgIf],
  templateUrl: './mensajeforo-registrar.component.html',
  styleUrl: './mensajeforo-registrar.component.css'
})
export class MensajeforoRegistrarComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  listaForos: Foros[] = [];
  listaUsuario: Usuario[] = [];
  mensajesforos: MensajesForos = new MensajesForos();

  constructor(
    private formBuilder: FormBuilder,
    private forosservice: ForosService,
    private usuarioservice: UsuarioService,
    private mensajeforoservice: MensajeforoService,
    private router: Router,
  ) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      idMensajesForos:[''],
      contenido:['',Validators.required],
      fechaPublicacion:['',Validators.required],
      mensajesforosforos:['',Validators.required],
      mensajesforosusuarios:['',Validators.required],
    });
    this.forosservice.list().subscribe((data) => {
      this.listaForos = data;
    });
    this.usuarioservice.list().subscribe((data) => {
      this.listaUsuario = data;
    });
  }
  insertar(): void {
    if(this.form.valid){
      this.mensajesforos.idMensajesForos=this.form.value.IdUsuario;
      this.mensajesforos.contenido=this.form.value.NombreUsuario
      this.mensajesforos.fechaPublicacion=this.form.value.CorreoUsuario
      this.mensajesforos.foros.idForos=this.form.value.mensajesforosforos
      this.mensajesforos.usuario.idUsuario=this.form.value.mensajesforosusuarios
        this.mensajeforoservice.insert(this.mensajesforos).subscribe((data) => {
          this.mensajeforoservice.list().subscribe((data) => {
            this.mensajeforoservice.setList(data);
          });
        });
        this.router.navigate(['mensajeforo'])
      }
  }
}
