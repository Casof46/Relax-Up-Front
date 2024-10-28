import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Planes } from '../../../models/planes';
import { PlanesService } from '../../../services/planes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-insertar',
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
  templateUrl: './insertar.component.html',
  styleUrl: './insertar.component.css',
})
export class InsertarComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  planes: Planes = new Planes();
  id: number = 0;
  edicion: boolean = false;

  constructor(
    private cS: PlanesService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] > 0;
      this.init();
    });

    this.form = this.formBuilder.group({
      Pcodigo: [''],
      Pnombre: ['', Validators.required],
      Pdescripcion: ['', Validators.required],
      Pprecio: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    });
  }
  insertar(): void {
    if (this.form.valid) {
      this.planes.idPlan = this.form.value.Pcodigo;
      this.planes.nombrePlan = this.form.value.Pnombre;
      this.planes.descripcion = this.form.value.Pdescripcion;
      this.planes.precio = this.form.value.Pprecio;
      if (this.edicion) {
        //update
        this.cS.update(this.planes).subscribe((data) => {
          this.cS.list().subscribe((data) => {
            this.cS.setList(data);
          });
        });
      } else {
        //insert
        this.cS.insert(this.planes).subscribe((data) => {
          this.cS.list().subscribe((data) => {
            this.cS.setList(data);
          });
        });
      }

      /**/
    }
    this.router.navigate(['planes']);
  }
  init() {
    if (this.edicion) {
      this.cS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          Pcodigo: new FormControl(data.idPlan),
          Pnombre: new FormControl(data.nombrePlan),
          Pdescripcion: new FormControl(data.descripcion),
          Pprecio: new FormControl(data.precio),
        });
      });
    }
  }
}
