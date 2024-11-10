import { Rol } from "./Rol"
export class Usuario{
    idUsuario:string=""
    nombreUsuario:string=""
    correoUsuario:string=""
    telefonoUsuario:string=""
    contasenaUsuario:string=""
    progresoUsuario:number=0
    rol:Rol=new Rol()
}