import { Component,NgModule, OnInit } from '@angular/core';
import { 
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
 } from '@angular/forms';
 import { Relaxup } from '../../../models/Relaxup';
 import { RelaxupService } from '../../../services/Relaxup.service';
 import { ActivatedRoute,Params,Router,RouterLink} from '@angular/router';
 import { MatInputModule } from '@angular/material/input';
 import { MatFormFieldModule } from '@angular/material/form-field';
 import { MatSelectModule } from '@angular/material/select';
 import { MatButtonModule } from '@angular/material/button';
 import { CommonModule, NgIf } from '@angular/common';

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
  styleUrl: './insertar.component.css'
})
export class InsertarComponent implements OnInit{
form:FormGroup = new FormGroup({});
relaxup: Relaxup = new Relaxup();
id: number=0;
edicion: boolean=false;

listarol:{value:string; viewvalue:string}[]=[
  {value: 'usuario comun',viewvalue:'usuario comun'},
  {value:'administrador',viewvalue:'administrador'},
  {value:'asistente',viewvalue:'asistente'}
];
constructor(
  private rlx:RelaxupService,
  private FormBuilder:FormBuilder,
  private router:Router,
  private route: ActivatedRoute
){}
ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>{
      this.id=data['id'];
      this.edicion=data['id'] !=null;
      this.init()
      //traer data y mostrarla
    });
    this.form=this.FormBuilder.group({
    idUsuario:['',Validators.required],
    nombreUsuario:['',Validators.required],
    correoUsuario:['',Validators.required],
    constrasenaUsuario:['',Validators.required],
    progresoUsuario:['',[Validators.required,Validators.pattern(`^[0-100]+$`)]],
    telefonoUsuario:['',Validators.required],
    nombreRol:['',Validators.required],
    });
}
insertar():void{
  if (this.form.valid){
    this.relaxup.idUsuario=this.form.value.idUsuario;
    this.relaxup.nombreUsuario=this.form.value.nombreUsuario;
    this.relaxup.correoUsuario=this.form.value.correoUsuario;
    this.relaxup.constrasenaUsuario=this.form.value.constrasenaUsuario;
    this.relaxup.progresoUsuario=this.form.value.progresoUsuario;
    this.relaxup.telefonoUsuario=this.form.value.telefonoUsuario;
    this.relaxup.nombreRol=this.form.value.nombreRol;
    if(this.edicion){
      //update
      this.rlx.update(this.relaxup).subscribe((data)=>{
        this.rlx.list().subscribe((data)=>{
          this.rlx.setList(data);
        });
      });
    }else{
      //insert
      this.rlx.Insert(this.relaxup).subscribe((data)=>{
        this.rlx.list().subscribe((data)=>{
          this.rlx.setList(data);
        });
      });
    }
  }
  this.router.navigate(['usuarios']);
}
init(){
  if(this.edicion){
    this.rlx.listId(this.id).subscribe((data)=>{
    this.form= new FormGroup({
    idUsuario:new FormControl(data.idUsuario),
    nombreUsuario:new FormControl(data.nombreUsuario),
    correoUsuario:new FormControl(data.correoUsuario),
    constrasenaUsuario:new FormControl(data.constrasenaUsuario),
    progresoUsuario:new FormControl(data.progresoUsuario),
    telefonoUsuario:new FormControl(data.telefonoUsuario),
    nombreRol:new FormControl(data.nombreRol),
      });
    });
  }
}
}
