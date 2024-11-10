import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable, Subject } from 'rxjs';
import { Usuario } from '../models/Usuario';
import { Rol } from '../models/Rol';

const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url=`${base_url}/usuarios`;
  private listacambio=new Subject<Usuario[]>();

  constructor(private http:HttpClient) {}
  list(){
    return this.http.get<Usuario[]>(this.url);
  }
  insert(usuario:Usuario){
    return this.http.post(this.url,usuario)
  }
  getList() {
    return this.listacambio.asObservable();
  }
  setList(listaNueva: Usuario[]) {
    this.listacambio.next(listaNueva);
  }
  delete(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }
  listId(id:number){
    return this.http.get<Usuario>(`${this.url}/${id}`);
  }
  update(usuario:Usuario){
    return this.http.put(this.url,usuario);
  }
  getrolids():Observable<Rol[]>{
    return this.http.get<Rol[]>(`${base_url}/rol`)
  }
}
