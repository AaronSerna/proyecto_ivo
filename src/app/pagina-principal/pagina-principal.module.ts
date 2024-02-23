import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraPadreComponent } from './barra-padre/barra-padre.component';
import { AppRoutingModule } from '../app-routing.module';
import { MenuUsuariosComponent } from './menu-usuarios/menu-usuarios.component';

@NgModule({
  declarations: [
    BarraPadreComponent,
    MenuUsuariosComponent
  ],
  imports: [
    CommonModule,    
    AppRoutingModule
  ],
  exports: [
    BarraPadreComponent,
    MenuUsuariosComponent
  ]
})

export class PaginaPrincipalModule { }
