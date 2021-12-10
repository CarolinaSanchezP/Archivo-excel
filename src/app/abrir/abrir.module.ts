import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbrirRoutingModule } from './abrir-routing.module';
import { SeleccionarComponent } from './seleccionar/seleccionar.component';
import { ArchivoComponent } from './archivo/archivo.component';


@NgModule({
  declarations: [
    SeleccionarComponent,
    ArchivoComponent
  ],
  exports: [
    ArchivoComponent
  ],
  imports: [
    CommonModule,
    AbrirRoutingModule
  ]
})
export class AbrirModule { }
