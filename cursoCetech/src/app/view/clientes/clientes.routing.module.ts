import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { ClientesComponent } from './clientes.component';

const route: Routes = [
  {
    path: 'clientesRegistro',
    component: RegistroComponent
  },
  {
    path: 'clientesComponent',
    component: ClientesComponent
  }
];

export const ClientesRoutingModule = RouterModule.forChild(route);
