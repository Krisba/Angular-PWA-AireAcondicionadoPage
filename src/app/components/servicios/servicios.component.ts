import { Component, OnInit } from '@angular/core';

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { SERVICIOS } from 'src/app/data/servicios.data';


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  faCheckCircle = faCheckCircle;

  servicios = SERVICIOS;

  constructor() { }

  ngOnInit(): void {
  }

}
