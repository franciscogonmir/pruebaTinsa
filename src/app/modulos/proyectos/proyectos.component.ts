import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecursosService } from '../../services/recursos.service';
import { Proyecto } from './proyectos-mapper';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit ,OnDestroy{

  proyectos:Proyecto[];
  subsProyectos:Subscription;
  ColumnasAMostrar = ["id","startYear","endYear","modified","title"];

  constructor(private route:ActivatedRoute,private characterService:RecursosService,private location:Location) { }

  ngOnDestroy(): void {
    this.subsProyectos.unsubscribe();
  }

  //return el nombre del recurso pasado por parámetro
  getNombreRecurso():string{
    return this.route.snapshot.paramMap.get("name");
  }

  ngOnInit(): void {
    this.subsProyectos = this.characterService.getProyectos(this.route.snapshot.paramMap.get("id")).subscribe(response => {
      this.proyectos = response.data.results;
    })
  }
  //vuelve al componente anterior
  irAtras():void{
    this.location.back();
  }

}
