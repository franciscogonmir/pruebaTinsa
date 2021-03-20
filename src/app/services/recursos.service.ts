import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Response } from '../modulos/recursos/recursos-mapper';
import { ResponseProyectos } from '../modulos/proyectos/proyectos-mapper';

@Injectable({
  providedIn: 'root'
})
export class RecursosService {

  private recursosUrl = environment.urlBase+"/v1/public/characters";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    params:  new HttpParams().set("ts",environment.timeStamp).set("apikey",environment.publicKey).set("hash",environment.hash)
  };

  constructor(private http:HttpClient) { }

  getRecursos():Observable<Response>{
    return this.http.get<Response>(this.recursosUrl,this.httpOptions);
  }

   getProyectos(id:string):Observable<ResponseProyectos>{
    let urlSeries = this.recursosUrl + `/${id}/series`;
    return this.http.get<ResponseProyectos>(urlSeries,this.httpOptions);
  } 
}
