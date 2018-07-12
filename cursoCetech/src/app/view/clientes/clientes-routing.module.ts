import { NgModule, Component } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { ClientesComponent } from './clientes.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes=[{
 path: '',
 component: ClientesComponent
},
{
  path: 'cetech',
  component: RegistroComponent
}];

export const ClientesRoutingModule = RouterModule.forChild(routes);
