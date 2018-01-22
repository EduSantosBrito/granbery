import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ModuleWithProviders } from '@angular/core';

const routes : Routes = [
    {path: '', component: AppComponent}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);