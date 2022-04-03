import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { ClienteComponent } from './pages/cliente/cliente.component'


const routes : Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'agregar',
        component: AgregarComponent
      },
      {
        path: 'buscar',
        component: BuscarComponent
      },
      {
        path: 'editar',
        component: AgregarComponent
      },
      {
        path: 'listado',
        component: ListadoComponent
      },
      {
        path: 'cliente/:id',
        component: ClienteComponent
      },
      {
        path: '**',
        redirectTo: 'listado'
      }
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
  ]
})
export class AppRoutingClienteModule { }
