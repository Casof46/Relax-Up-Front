import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { Usuario } from '../../../models/Usuario';
import { Foros } from '../../../models/Foros';
import { ForosService } from '../../../services/foros.service';
import { UsuarioService } from '../../../services/usuario.service';
@Component({
  selector: 'app-foro-registrar',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    NgIf],
  templateUrl: './foro-registrar.component.html',
  styleUrl: './foro-registrar.component.css'
})
export class ForoRegistrarComponent {
  form: FormGroup = new FormGroup({});
  listaUsuario: Usuario[] = [];
  foros: Foros = new Foros();

  constructor(
    private formBuilder: FormBuilder,
    private usuarioservice: UsuarioService,
    private forosservice: ForosService,
    private router: Router,
  ) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      IdForos:[''],
      Titulo:['',Validators.required],
      IdUsuario:['',Validators.required],
    });
    this.usuarioservice.list().subscribe((data) => {
      this.listaUsuario = data;
    });
  }
  insertar(): void {
    if(this.form.valid){
      this.foros.idForos=this.form.value.IdUsuario;
      this.foros.titulo=this.form.value.Titulo;
      this.foros.usuario.idUsuario=this.form.value.IdUsuario
        this.forosservice.insert(this.foros).subscribe((data) => {
          this.forosservice.list().subscribe((data) => {
            this.forosservice.setList(data);
          });
        });
        this.router.navigate(['foros'])
      }
  }
}
