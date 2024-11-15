import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { RutinaService } from '../../../services/rutina.service';
import { EjerciciorutinaService } from '../../../services/ejerciciorutina.service';
import { Rutina } from '../../../models/Rutina';
import { EjercicioRutina } from '../../../models/EjercicioRutina';
@Component({
  selector: 'app-ejerciciorutina-registrar',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    NgIf],
  templateUrl: './ejerciciorutina-registrar.component.html',
  styleUrl: './ejerciciorutina-registrar.component.css'
})
export class EjerciciorutinaRegistrarComponent {
  form: FormGroup = new FormGroup({});
  listaRutina: Rutina[] = [];
  ejerciciorutina: EjercicioRutina = new EjercicioRutina();

  constructor(
    private formBuilder: FormBuilder,
    private rutinaservice: RutinaService,
    private ejerciciorutinaservice: EjerciciorutinaService,
    private router: Router,
  ) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      idEjercicioRutina:[''],
      tituloEjercicioRutina:['',Validators.required],
      descripcionEjercicioRutina:['',Validators.required],
      RutinaEjercicioRutina:['',Validators.required],
    });
    this.rutinaservice.list().subscribe((data) => {
      this.listaRutina = data;
    });
  }
  insertar(): void {
    if(this.form.valid){
      this.ejerciciorutina.idEjercicioRutina=this.form.value.idEjercicioRutina;
      this.ejerciciorutina.tituloEjercicioRutina=this.form.value.tituloEjercicioRutina
      this.ejerciciorutina.descripcionEjercicioRutina=this.form.value.descripcionEjercicioRutina
      this.ejerciciorutina.rutina.idRutina=this.form.value.RutinaEjercicioRutina
      
        this.ejerciciorutinaservice.insert(this.ejerciciorutina).subscribe((data) => {
          this.ejerciciorutinaservice.list().subscribe((data) => {
            this.ejerciciorutinaservice.setList(data);
          });
        });
        this.router.navigate(['ejerciciorutina'])
      }
  }
}
