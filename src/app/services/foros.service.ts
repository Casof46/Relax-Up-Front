import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Foros } from '../models/Foros';
import { Subject } from 'rxjs';

const base_url = environment.base
@Injectable({
  providedIn: 'root'
})

export class ForosService {
  private url=`${base_url}/foross`;
  private listacambio=new Subject<Foros[]>();

  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<Foros[]>(this.url);
  }
  insert(fo:Foros){
    return this.http.post(this.url,fo)
  }
  getList() {
    return this.listacambio.asObservable();
  }
  setList(listaNueva: Foros[]) {
    this.listacambio.next(listaNueva);
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  listId(id:number){
    return this.http.get<Foros>(`${this.url}/${id}`);
  }
  update(foros:Foros){
    return this.http.put(this.url,foros);
  }
}
