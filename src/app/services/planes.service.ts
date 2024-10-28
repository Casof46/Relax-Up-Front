import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Planes } from '../models/planes';
import { Subject } from 'rxjs';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class PlanesService {
  private url = `${base_url}/planes`;
  private listaCambio = new Subject<Planes[]>();

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Planes[]>(this.url);
  }
  insert(c: Planes) {
    return this.http.post(this.url, c);
  }
  getList() {
    return this.listaCambio.asObservable();
  }

  setList(listaNueva: Planes[]) {
    this.listaCambio.next(listaNueva);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  listId(id: number) {
    return this.http.get<Planes>(`${this.url}/${id}`);
  }
  update(ci: Planes) {
    return this.http.put(this.url, ci);
  }
}