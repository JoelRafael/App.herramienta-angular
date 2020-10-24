import { Component, OnInit, Input,  HostBinding } from '@angular/core';
import { herramientascoleccion } from '../models/herramientascoleccion.model';

@Component({
  selector: 'app-herramientas',
  templateUrl: './herramientas.component.html',
  styleUrls: ['./herramientas.component.css']
})
export class HerramientasComponent implements OnInit {
@Input()herramientas:herramientascoleccion;

@HostBinding('attr.class')cssClass='col-md-4';
  constructor() { }

  ngOnInit(): void {
  }

}
