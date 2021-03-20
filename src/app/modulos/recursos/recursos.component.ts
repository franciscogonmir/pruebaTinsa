import { Component, OnInit } from '@angular/core';
import { Recursos } from './recursos-mapper';
import { RecursosService } from '../../services/recursos.service';

@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.css']
})
export class RecursosComponent implements OnInit {

  listaRecursos:Recursos[];
  columnasAMostrar: string[] = ['id', 'name', 'description', 'modified','series'];

  constructor(private recursosSvc:RecursosService) { }

  ngOnInit(): void {
    this.recursosSvc.getRecursos().subscribe(response => {
      this.listaRecursos = response.data.results;
    })  
  }

}
