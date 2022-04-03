import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { HomeComponent } from './pages/home/home.component';




@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    ListadoComponent,
    ClienteComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClienteModule { }
