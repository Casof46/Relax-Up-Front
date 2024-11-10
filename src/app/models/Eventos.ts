import { Time } from "@angular/common"
import { Usuario } from './Usuario';

export class Eventos{
    ideventos:number=0
    titulo:string=""
    actividad:string=""
    fechaInicio:Date=new Date(Date.now()) 
    fechaFin:Date=new Date(Date.now())
    hora:string=""
    confirmacion:string=""
    usuario:Usuario=new Usuario()
}