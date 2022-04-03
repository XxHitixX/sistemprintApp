import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { VendedorComponent } from './pages/vendedor/vendedor.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ListadoComponent } from './pages/listado/listado.component';



@NgModule({
  declarations: [
    HomeComponent,
    VendedorComponent,
    AgregarComponent,
    BuscarComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VendedorModule { }
