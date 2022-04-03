import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { ProductoComponent } from './pages/producto/producto.component';



@NgModule({
  declarations: [
    HomeComponent,
    AgregarComponent,
    BuscarComponent,
    ListadoComponent,
    ProductoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductoModule { }
