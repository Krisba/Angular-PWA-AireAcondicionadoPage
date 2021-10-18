import { Component, OnInit } from '@angular/core';

import { BENEFICIOS } from 'src/app/data/beneficios.data';


@Component({
  selector: 'app-caracteristicas',
  templateUrl: './caracteristicas.component.html',
  styleUrls: ['./caracteristicas.component.scss']
})
export class CaracteristicasComponent implements OnInit {

  beneficios = BENEFICIOS;

  constructor() { }

  ngOnInit(): void {
  }

}
