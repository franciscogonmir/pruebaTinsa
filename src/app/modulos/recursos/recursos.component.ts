import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recursos } from './recursos-mapper';
import { RecursosService } from '../../services/recursos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.css']
})
export class RecursosComponent implements OnInit,OnDestroy {

  listaRecursos:Recursos[];
  totalResultados:number;
  columnasAMostrar: string[] = ['id', 'name', 'description', 'modified','series'];
  subsRescursos:Subscription;
  SubsTotalResultados:Subscription;

  constructor(private recursosSvc:RecursosService) { }

  ngOnDestroy(): void {
    this.subsRescursos.unsubscribe();
    this.SubsTotalResultados.unsubscribe();
  }

  ngOnInit(): void {
    this.subsRescursos = this.recursosSvc.getRecursos("0").subscribe(recursos =>{
      this.listaRecursos = recursos;
    });
   this.SubsTotalResultados =  this.recursosSvc.getTotalResultados().subscribe(totalResult => {
      this.totalResultados = totalResult;
    })
  }

  //Pide al servicio los resultadod devueltos por la nueva página
  cambioPagina(event){
    let offset = event.pageIndex * event.pageSize;
    this.subsRescursos = this.recursosSvc.getRecursos(offset.toString()).subscribe(recursos => {
      this.listaRecursos = recursos;
    })
  }

}
