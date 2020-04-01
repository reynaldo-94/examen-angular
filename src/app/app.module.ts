import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders} from './app.routing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListadoComponent } from './components/listado/listado.component';
import { PaginacionComponent } from './components/paginacion/paginacion.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent,
    FormularioComponent,
    ListadoComponent,
    PaginacionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
