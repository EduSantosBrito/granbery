import { InstitucionalComponent } from './../institucional/institucional.component';
import { NotFoundComponent } from './../not-found/not-found.component';
import { LoginComponent } from './../login/login.component';
import { MainComponent } from './../main/main.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'login', component: LoginComponent },
    { path: 'institucional', component: InstitucionalComponent },
    { path: '**', component: NotFoundComponent },
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);