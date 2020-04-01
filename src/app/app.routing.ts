import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { FormularioComponent } from './components/formulario/formulario.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'persona', component: FormularioComponent},
    { path: 'persona/:id', component: FormularioComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);//Esto lo que hace es cargar 