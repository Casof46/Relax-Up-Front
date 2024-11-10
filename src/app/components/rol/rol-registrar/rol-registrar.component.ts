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
    private Rol: RolserviceService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
      this.route.params.subscribe((data:Params)=>{
        this.id = data['id'];
        this.edicion = data['id'] != null;
        this.init()
      });
      this.form=this.formBuilder.group({
        idRol:[''],
        nombreRol:['',Validators.required]
      });
  }
  insertar():void{
    if (this.form.valid) {
      this.rol.idRol=this.form.value.idRol;
      this.rol.nombreRol=this.form.value.nombreRol;
      if(this.edicion){
        //update
        this.Rol.update(this.rol).subscribe((data) => {
          this.Rol.list().subscribe((data) => {
            this.Rol.setList(data);
          });
        });
      }else{
        //insert
        this.Rol.insert(this.rol).subscribe((data) => {
          this.Rol.list().subscribe((data) => {
            this.Rol.setList(data);
          });
        });
      }
    }
    this.router.navigate(['Rol']);
  }
  init(){
    if(this.edicion){
      this.Rol.listId(this.id).subscribe((data)=>{
        this.form=new FormGroup({
          idRol:new FormControl(data.idRol),
          nombreRol:new FormControl(data.nombreRol)
        })
      })
    }
  }
}
