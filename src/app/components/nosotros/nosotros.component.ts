import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {

  nombre: string;
  email: string;
  telefono: number;
  mensaje: string;

  constructor() { }

  ngOnInit(): void {
  }

  presupuestar(fContacto: NgForm) {
    if (fContacto.valid) {
      console.log(fContacto);
      this.presentAlertExito();
      fContacto.reset();
    } else if (fContacto.invalid) {
      this.presentAlertError();
      return;
    }
  }

  presentAlertExito() {
    {
      Swal.fire({
        icon: 'success',
        html: '<h><big>Su mail ha sido enviado exitosamente.</big></h>',
        backdrop: false,
        background: '#ececec',
        showConfirmButton: true,
        confirmButtonColor: '#05173b',
      });
    }
  }

  presentAlertError() {
    {
      Swal.fire({
        icon: 'error',
        html: '<h><big>Debe completar todos los campos con datos válidos.</big></h>',
        backdrop: false,
        background: '#ececec',
        showConfirmButton: true,
        confirmButtonColor: '#05173b',
      });
    }
  }

}
