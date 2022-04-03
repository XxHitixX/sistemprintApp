import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErroPageComponent } from './shared/erro-page/erro-page.component';


const routes: Routes = [
  {
    path: 'cliente',
    loadChildren: () => import('../app/cliente/cliente.module').then(m => m.ClienteModule)
  },
  {
    path: '404',
    component: ErroPageComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
