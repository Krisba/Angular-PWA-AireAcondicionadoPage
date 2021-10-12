import { Component, OnInit } from '@angular/core';

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  faCheckCircle = faCheckCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
