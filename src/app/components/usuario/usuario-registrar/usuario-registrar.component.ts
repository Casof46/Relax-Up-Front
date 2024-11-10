import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, FormBuilder, FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Usuario } from '../../../models/Usuario';
import { UsuarioListarComponent } from '../usuario-listar/usuario-listar.component';
import { Rol } from '../../../models/Rol';
import { BehaviorSubject } from 'rxjs';
import { Router } from 'express';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-usuario-registrar',
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
  templateUrl: './usuario-registrar.component.html',
  styleUrl: './usuario-registrar.component.css'
})
export class UsuarioRegistrarComponent implements OnInit{
  form:FormGroup=new FormGroup({})
  usuario:Usuario=new Usuario()
  id:number=0
  edicion: boolean = false;
  listarol:{value:Rol;viewValue:string}[]=[]
  private rolsubject=new BehaviorSubject<Rol[]>([]);
  constructor(
    private usuarioi: UsuarioService,
    private FormBuilder:FormBuilder,
    private router: Router,
    private route:ActivatedRoute
  ){}
  ngOnInit(): void {
      this.route.params.subscribe((data)=>{
        this.id=data['id'];
        this.edicion=data['id']!=null
        this.init()
        this.loadrolids()
        this.rolsubject.subscribe(rols=>{
          this.listarol=rols.map(Rol=>({value:Rol,viewValue:Rol.idRol.toString()}))
        })
      })
  }
  insertar():void{
    if(this.form.valid){
      this.usuario.idUsuario=this.form.value.idUsuario;
      this.usuario.nombreUsuario=this.form.value.nombreUsuario;
      this.usuario.correoUsuario=this.form.value.correoUsuario;
      this.usuario.telefonoUsuario=this.form.value.telefonoUsuario;
      this.usuario.contasenaUsuario=this.form.value.contasenaUsuario;
      this.usuario.progresoUsuario=this.form.value.progresoUsuario;
      this.usuario.rol=this.form.value.rol;
      if(this.edicion){
        this.usuarioi.update(this.usuario).subscribe((data)=>{
          this.usuarioi.list().subscribe(data=>{
            this.usuarioi.setList(data)
          })
        })
      }else{
        this.usuarioi.insert(this.usuario).subscribe((data)=>{
          this.usuarioi.list().subscribe(data=>{
            this.usuarioi.setList(data);
          })
        })
      }
    }
  }
  init():void{
    if(this.edicion){
      this.usuarioi.listId(this.id).subscribe(data=>{
        this.form=new FormGroup({
          idUsuario:new FormControl(data.idUsuario),
          nombreUsuario:new FormControl(data.nombreUsuario),
          correoUsuario:new FormControl(data.correoUsuario),
          telefonoUsuario:new FormControl(data.telefonoUsuario),
          constrasenaUsuario:new FormControl(data.contasenaUsuario),
          progresoUsuario:new FormControl(data.progresoUsuario),
          rol:new FormControl(data.rol.idRol)
        })
      })
    }
  }
  loadrolids():void{
      this.usuarioi.getrolids().subscribe(rols=>{
        this.rolsubject.next(rols);
      })
  }
}
