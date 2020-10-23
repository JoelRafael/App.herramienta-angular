import { Component, OnInit } from '@angular/core';
import {herramientascoleccion} from './../models/herramientascoleccion.model';

@Component({
  selector: 'app-lista-herramientas',
  templateUrl: './lista-herramientas.component.html',
  styleUrls: ['./lista-herramientas.component.css']
})
export class ListaHerramientasComponent implements OnInit {
lista:herramientascoleccion[];
  constructor() {
    this.lista=[];
  }

  ngOnInit(): void {
  }
  guardar(nombre, codigo, herramienta,url){
    this.lista.push(new herramientascoleccion(nombre,codigo,herramienta,url));
    console.log(this.lista);
    return false;

    }
}
