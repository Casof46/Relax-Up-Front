import { Usuario } from "./Usuario"

export class  UsuarioRutina{
    idusuariorutina:number=0
    fecharealizacion:Date=new Date(Date.now())
    progreso:number=0
    usuario:Usuario=new Usuario()
}