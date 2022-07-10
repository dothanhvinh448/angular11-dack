import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { guesRouting } from './gues.routing';
import { LayoutComponent } from '../layout/layout.component';
import { LoginadminComponent } from '../pages/loginadmin/loginadmin.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LayoutComponent,
    LoginadminComponent
  ],
  imports: [
    CommonModule,
    guesRouting,
    FormsModule
  ]
})
export class GuesModule { }
