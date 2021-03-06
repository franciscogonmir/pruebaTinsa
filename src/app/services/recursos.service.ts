import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Response, Recursos } from '../modulos/recursos/recursos-mapper';
import { ResponseProyectos } from '../modulos/proyectos/proyectos-mapper';

@Injectable({
  providedIn: 'root'
})
export class RecursosService {
  private recursosUrl = environment.urlBase+"/v1/public/characters";
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }), 
    params:{}
  };
  recursos$:Subject<Recursos[]> = new Subject;
  recursos:Recursos[];
  NumResultados$:Subject<number> = new Subject;
  numResultados:number;

  constructor(private http:HttpClient) { }

  //pide a la api los datos 
  //@params offset: es la posicion a partir de la que se quieren obtener los elementos
  getRecursosFromServer(offset:string){ 
      this.httpOptions.params = new HttpParams().set("ts",environment.timeStamp).set("apikey",environment.publicKey).set("hash",environment.hash).set("offset",offset);
      this.http.get<Response>(this.recursosUrl,this.httpOptions).subscribe(data =>{
      this.recursos = data.data.results;
      this.recursos$.next(this.recursos)
      this.numResultados = data.data.total;
      this.NumResultados$.next(this.numResultados);
    });
 }
//return un observable con un Array de recursos
 getRecursos(offset):Observable<Recursos[]>{
   this.getRecursosFromServer(offset);
   return this.recursos$.asObservable();
 }
//return un observable con el total de elementos que hay 
 getTotalResultados():Observable<number>{
   return this.NumResultados$.asObservable();
 }
//return los proyectos asignados a un recurso
 getProyectos(id:string):Observable<ResponseProyectos>{
  this.httpOptions.params = new HttpParams().set("ts",environment.timeStamp).set("apikey",environment.publicKey).set("hash",environment.hash);
    let urlSeries = this.recursosUrl + `/${id}/series`;
    return this.http.get<ResponseProyectos>(urlSeries,this.httpOptions);
}

}
