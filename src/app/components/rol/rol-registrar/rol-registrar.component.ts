import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterOutlet, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { Rol } from '../../../models/Rol';
import { RolserviceService } from '../../../services/rolservice.service';
import { Router } from '@angular/router';



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
    CommonModule
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
    private rolservice: RolserviceService,
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
      IdRol: [''],
      NombreRol: ['', Validators.required],
    });
  }
  insertar(): void {
    if (this.form.valid) {
      this.rol.idRol = this.form.value.IdRol;
      this.rol.nombreRol = this.form.value.NombreRol;
      if (this.edicion) {
        //update
        this.rolservice.update(this.rol).subscribe((data) => {
          this.rolservice.list().subscribe((data) => {
            this.rolservice.setList(data);
          }); 
        });
      } else {
        //insert
        this.rolservice.insert(this.rol).subscribe((data) => {
          this.rolservice.list().subscribe((data) => {
            this.rolservice.setList(data);
          });
        });
      }
      /**/
    }
    this.router.navigate(['rol']);
  }
  init() {
    if (this.edicion) {
      this.rolservice.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          IdRol: new FormControl(data.idRol),
          NombreRol: new FormControl(data.nombreRol),
        });
      });
    }
  }
}
