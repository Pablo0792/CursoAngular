import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { FormularioComponent } from './formulario/formulario.component';
import { RouterModule,Routes} from "@angular/router";
import { ClientesModule } from './view/clientes/clientes.module';
import { RegistroComponent } from './view/clientes/registro/registro.component';

const router: Routes = [
  {
    path: '',
    loadChildren: './view/clientes/clientes.module#ClientesModule'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    EjemploComponent,
    FormularioComponent,

  ],
  imports: [
    BrowserModule,
    ClientesModule,
    RouterModule.forRoot(router),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
