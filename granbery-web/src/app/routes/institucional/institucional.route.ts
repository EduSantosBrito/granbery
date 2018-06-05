import { InstitucionalComponent } from './../../institucional/institucional.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: InstitucionalComponent },
];

export const institucionalRouting: ModuleWithProviders = RouterModule.forChild(routes);