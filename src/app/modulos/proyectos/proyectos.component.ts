import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecursosService } from '../../services/recursos.service';
import { Proyecto } from './proyectos-mapper';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos:Proyecto[];
  displayedColumns = ["id","startYear","endYear","modified","title"];

  constructor(private route:ActivatedRoute,private characterService:RecursosService) { }

  ngOnInit(): void {
    this.characterService.getProyectos(this.route.snapshot.paramMap.get("id")).subscribe(response => {
      this.proyectos = response.data.results;
      console.warn(this.proyectos)
    })
  }

}
