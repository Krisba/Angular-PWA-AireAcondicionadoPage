import { Component, OnInit } from '@angular/core';

import { BENEFICIOS } from 'src/app/data/beneficios';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  beneficios = BENEFICIOS;

  constructor() { }

  ngOnInit(): void {
  }

}
