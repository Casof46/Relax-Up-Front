import { LargeNumberLike } from "node:crypto"

export class Usuario{
    idUsuario:number=0
    nombreUsuario:string=""
    correoUsuario:string=""
    constrasenaUsuario:string=""
    progresoUsuario:number=0
    telefonoUsuario:number=0
    idRol:number=0
}
export class Rol{
    idRol:string=""
    nombreRol:string=""
}