import { Injectable } from "@angular/core";
import { environment } from '../../environments/environment';
import { HttpClient, HttpContext } from '@angular/common/http';
import { Relaxup } from '../models/Relaxup';
import { Subject } from 'rxjs';

const base_url = environment.base;

@Injectable({
    providedIn:'root',
})
export class RelaxupService{
    private url =`${base_url}/usuarios`;
    private listaCambio = new Subject<Relaxup[]>();

    constructor(private http: HttpClient){}

    list(){
        return this.http.get<Relaxup[]>(this.url);
    }
    Insert(r:Relaxup){
        return this.http.post(this.url,r);
    }
    getList(){
        return this.listaCambio.asObservable();
    }
    setList(listanueva: Relaxup[]){
        this.listaCambio.next(listanueva);
    }
    delete(id:number){
        return this.http.delete(`${this.url}/${id}`);
    }
    listId(id:number){
        return this.http.get<Relaxup>(`${this.url}/${id}`);
    }
    update(re:Relaxup){
        return this.http.put(this.url,re);
    }
}