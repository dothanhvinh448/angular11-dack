import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { LoginadminComponent } from '../pages/loginadmin/loginadmin.component';

const routes: Routes = [
    {
        path:"auth",
        component:LayoutComponent,
        children:[
            {
                path:"login",
               component:LoginadminComponent,
            },
            
        ]
    }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class guesRouting { }