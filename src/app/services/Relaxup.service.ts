import { Injectable } from "@angular/core";
import { environment } from '../../environments/environment';
import { HttpClient, HttpContext } from '@angular/common/http';
import { Usuario } from '../models/Relaxup';
import { Subject } from 'rxjs';

const base_url = environment.base;

@Injectable({
    providedIn:'root',
})
export class UsuarioService{
    private url =`${base_url}/usuarios`;
    private listaCambio = new Subject<Usuario[]>();

    constructor(private http: HttpClient){}

    list(){
        return this.http.get<Usuario[]>(this.url);
    }
    Insert(r:Usuario){
        return this.http.post(this.url,r);
    }
    getList(){
        return this.listaCambio.asObservable();
    }
    setList(listanueva: Usuario[]){
        this.listaCambio.next(listanueva);
    }
    delete(id:number){
        return this.http.delete(`${this.url}/${id}`);
    }
    listId(id:number){
        return this.http.get<Usuario>(`${this.url}/${id}`);
    }
    update(re:Usuario){
        return this.http.put(this.url,re);
    }
}