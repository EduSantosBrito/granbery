import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MenuComponent } from '../../shared/menu/menu.component';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        MenuComponent,
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        MenuComponent,
    ],
    providers: [],
})
export class MenuModule { }
