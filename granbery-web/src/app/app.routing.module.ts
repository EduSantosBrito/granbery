import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ModuleWithProviders } from '@angular/core';
import { MainComponent } from './main/main.component';

const routes: Routes = [
    { path: '', component: MainComponent },
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);