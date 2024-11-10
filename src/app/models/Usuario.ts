import { Rol } from "./Rol"
export class Usuario{
    idUsuario:number=0
    nombreUsuario:string=""
    correoUsuario:string=""
    telefonoUsuario:string=""
    contasenaUsuario:string=""
    progresoUsuario:number=0
    rol:Rol=new Rol()
}