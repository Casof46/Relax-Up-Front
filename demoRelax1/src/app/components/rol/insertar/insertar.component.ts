import { Component, OnInit } from '@angular/core';
import { 
  FormBuilder, 
  FormControl, 
  FormGroup, 
  FormsModule, 
  ReactiveFormsModule, 
  Validators} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Rol } from '../../../models/Rol';
import { RolService } from '../../../services/rol.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
    CommonModule
  ],
  templateUrl: './insertar.component.html',
  styleUrl: './insertar.component.css'
})
export class InsertarComponent implements OnInit{
  form:FormGroup = new FormGroup({});
    rol: Rol = new Rol();
    id: number = 0;
    edicion: boolean = false;

    listaNombres: { value: string; viewValue: string }[] = [
      { value: 'Administrador', viewValue: 'Administrador' },
      { value: 'Programador', viewValue: 'Programador' },
      { value: 'Técnico', viewValue: 'Técnico' },
    ];
    constructor(
      private rS: RolService,
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
        hcodigo: [''], 
        hnombre: ['', Validators.required],
        });
    }
    insertar(): void {
      if (this.form.valid) {
        this.rol.idRol = this.form.value.hcodigo;
        this.rol.nombreRol = this.form.value.hnombre;
        if (this.edicion) {
          //update
          this.rS.update(this.rol).subscribe((data) => {
            this.rS.list().subscribe((data) => {
              this.rS.setList(data);
            });
          });
        } else {
          //insert
          this.rS.insert(this.rol).subscribe((data) => {
            this.rS.list().subscribe((data) => {
              this.rS.setList(data);
            });
          });
        }
  
        /**/
      this.router.navigate(['roles'])
    }
  }
    init() {
      if (this.edicion) {
        this.rS.listId(this.id).subscribe((data) => {
          this.form = new FormGroup({
            hcodigo: new FormControl(data.idRol),
            hnombre: new FormControl(data.nombreRol),
          });
        });
      }
    }
  }
