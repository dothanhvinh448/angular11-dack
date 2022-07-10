import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/guard/admin.guard';
import { LayoutComponent } from '../../layout/layout.component';
import { ListorderComponent } from '../../pages/listorder/listorder.component';
import { ListuserComponent } from '../../pages/listuser/listuser.component';


const routes: Routes = [
  {
    path:"admin",
    component:LayoutComponent,
    canActivateChild:[AdminGuard],
    children:[
        {
            path:"",
            redirectTo:"listorder",
            pathMatch:"full",
        },
        {
           path:"listorder",
           component:ListorderComponent
        },
        {
            path:"listuser",
            component:ListuserComponent
         }
    ]
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class adminRouting { }