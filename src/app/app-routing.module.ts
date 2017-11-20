import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HousingComponent } from './housing/housing.component';


@NgModule({
    imports: [RouterModule.forRoot([
        {
            path: 'home',
            component: HomeComponent
        },
        {
            path: 'housing',
            component: HousingComponent
        },
        {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full'
        }
    ])],
    exports: [RouterModule]
})
export class AppRoutingModule { }