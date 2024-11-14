import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgIf } from '@angular/common'; 
import { RutinaService } from '../../../services/rutina.service';
import { TecnicarelajacionService } from '../../../services/tecnicarelajacion.service';
import { TecnicasRelajacion } from '../../../models/TecnicasRelajacion';
import { Rutina } from '../../../models/Rutina';
@Component({
  selector: 'app-rutina-registrar',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    NgIf],
  templateUrl: './rutina-registrar.component.html',
  styleUrl: './rutina-registrar.component.css'
})
export class RutinaRegistrarComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  listaTecnicasRelajacion: TecnicasRelajacion[] = [];
  rutina: Rutina = new Rutina();

  constructor(
    private formBuilder: FormBuilder,
    private tecnicasrelajacionservice:TecnicarelajacionService,
    private rutinaservice: RutinaService,
    private router: Router,
  ) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      IdRutina:['',Validators.required],
      nombreRutina:['',Validators.required],
      descripcionRutina:['',Validators.required],
      duracionRutina:['',Validators.required],
      TecnicaRelajacionRutina:['',Validators.required],
    });
    this.tecnicasrelajacionservice.list().subscribe((data) => {
      this.listaTecnicasRelajacion = data;
    });
  }
  insertar(): void {
    if(this.form.valid){
      this.rutina.idRutina=this.form.value.IdRutina;
      this.rutina.nombreRutina=this.form.value.nombreRutina
      this.rutina.descripcionRutina=this.form.value.descripcionRutina
      this.rutina.duracionRutina=this.form.value.duracionRutina
      this.rutina.tecnicasRelajacion.idTecnicaRelajacion=this.form.value.TecnicaRelajacionRutina
        this.rutinaservice.insert(this.rutina).subscribe((data) => {
          this.rutinaservice.list().subscribe((data) => {
            this.rutinaservice.setList(data);
          });
        });
        this.router.navigate(['rutina'])
      }
  }
}
